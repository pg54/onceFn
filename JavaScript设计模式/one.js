//1:面向对象，合作开发
//1.1 es5版本
var CheckObject = function() {}
CheckObject.prototype = {
    checkName : function () {
        console.log('do checkName');
        return this;
    },
    checkEmail : function () {
        console.log('do checkEmail');
        return this;
    },
    checkPassword : function () {
        console.log('do checkPassword');
        return this;
    }
}
var checker = new CheckObject();
checker.checkEmail();
//1.1 es6版本
class CheckObject {
    checkName() {
        console.log('do checkName');
    }
    checkEmail() {
        console.log('do checkEmail');
    }
    checkPassword() {
        console.log('do checkPassword');
    }
}
checker.checkEmail();


//2:面向对象，合作开发
// 2.1闭包
var Book = (
    function() {
        var bookNum = 0;
        function checkBook(name) {
        }
        return function(newId, newName, newPrice) {
            var name,price;
            function checkID(id) {}
            //特权方法
            this.getName = function() {}
            this.setName = function() {}
            this.id = newId;
            this.copy = function() {};
            bookNum++
            if (bookNum > 100) {
                throw new Error('我们仅出版100本书')
            }
            //构造器
            this.setName(name);
            this.setPrice(price);
        }
    }
)()
Book.prototype = {
    isJSBook: false,
    display: function() {}
}

