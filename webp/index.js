// 方法一 没看懂
(function() {
    function webpTest(src, name) {
        var img = new Image(),
            isSupport = false,
            className, cls;

        img.onload = function() {
            isSupport = !!(img.height > 0 && img.width > 0);

            cls = isSupport ? (' ' + name) : (' no-' + name);
            className = document.querySelector('html').className
            className += cls;

            document.querySelector('html').className = className.trim();
        };
        img.onerror = function() {
            cls = (' no-' + name);
            className = document.querySelector('html').className
            className += cls;

            document.querySelector('html').className = className.trim();
        };

        img.src = src;
    }

    var webpSrc = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoB\
        AAEAAwA0JaQAA3AA/vuUAAA=',
        webpanimationSrc = 'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAA\
                    SAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAA\
                    AAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA';

    webpTest(webpSrc, 'webp');
    webpTest(webpanimationSrc, 'webpanimation');
})();

function _getWebpSrc(src) {
    var dpr = Math.round(window.devicePixelRatio || 1),
        ratio = [1, 1, 1.5, 2, 2, 2],
        elHtml = document.querySelector('html'),
        isSupportWebp = (/(^|\s)webp(\s|$)/i).test(elHtml.className),
        isSupportWebpAnimation = (/(^|\s)webpanimation(\s|$)/i).test(elHtml.className),
        deviceWidth = elHtml.clientWidth,
        isQiniuSrc = /img\.qdaily\.com\//.test(src),
        format = _getFormat(src),
        isGifWebp, isNotGifWebp, regDetailImg;

    if (!src || !isQiniuSrc || !format || format == 'webp') {
        return src;
    }

    isNotGifWebp = (format != 'gif' && isSupportWebp);
    isGifWebp = (format == 'gif' && isSupportWebpAnimation);

    // 根据屏幕分辨率计算大小
    src = src.replace(/\/(thumbnail|crop)\/.*?(\d+)x(\d+)[^\/]*\//ig, function(match, p0, p1, p2) {
        if(dpr > 1){
            p1 = Math.round(p1 * ratio[dpr]);
            p2 = Math.round(p2 * ratio[dpr]);

            match = match.replace(/\d+x\d+/, p1 + 'x' + p2)
        }

        return match;
    });

    if(isNotGifWebp || isGifWebp) {
        // 替换webp格式，首页/列表页
        src = src.replace(/\/format\/([^\/]*)/ig, function(match, p1) {
            return '/format/webp';
        });
    }
}

// 方法二
(function () {
    function checkWebp(callback) {
        var img = new Image();
        img.onload = function () {
            var result = (img.width > 0) && (img.height > 0);
            callback(result);
        };
        img.onerror = function () {
            callback(false);
        };
        img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
    }
    
    function showImage(useWebp) {
        //背景图片 凡是用背景图片的加上bg_check_webp用来判断是否添加类bg_use_webp
        if (useWebp) {
            $('.bg_check_webp').each(function (index, ele) {
                var str = ele.classList[0] + '_webp';
                console.log(str);
                $(ele).addClass(str)
            })
        }
    }
    checkWebp(showImage)
})()

//img图片 picture需要html5shiv
{/* <picture class="picture">
    <source type="image/webp" srcset="http://img.onenewcare.com/web/production/school/home/xxjj.webp">
    <img class="schoolModuleItem" src="http://img.onenewcare.com/web/production/school/home/xxjj.png1" alt="">
</picture> */}

