var onceFn = {
    // 字符串
    //去除空格，type=1
    trim: function (str, type) {
        switch (type) {
            case 1:
                return str.replace(/\s/g, '')

        }

    },
    // 4-1
    hasClass: function(obj, classStr) {
        if (obj.className && this.trim(obj.className, 1) !== "") {

        }
    }
}