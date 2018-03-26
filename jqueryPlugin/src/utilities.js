// https://github.com/pg54/magnify/blob/master/src/js/utilities.js
function throttle(fn, delay) {
    var timer = null;
    return function () {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

function preloadImg(src, success, error) {
    var img = new Image();
    img.onload = function () {
        success(img);
    };
    img.onerror = function () {
        error(img)
    };
    img.src = src;
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


function getImageNameFromUrl(url) {
    var reg = /^.*?\/*([^/?]*)\.[a-z]+(\?.+|$)/ig,
        txt = url.replace(reg, '$1');
    return txt;
}


function getNumFromCSSValue(value) {
    var reg = /\d+/g,
        arr = value.match(reg),
        num = parseFloat(arr[0]);
    return num;
}

// 判断是否滚动
function hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
}

// 不知道干啥的
function getScrollbarWidth() {
    var scrollDiv = document.createElement('div');
}