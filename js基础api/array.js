// 实现slice
[].prototype.slice = function(b, e) {
    var result = [];
    b = b || 0;
    e = e || this.length;
    for (var i = 0; i < e; i++ ) {
        result.push(this[i])
    }
    return result
}

array = Array.prototye.slice.call(arrayLike)
array = [].slice.call(arrayLike)
array = Array.from(arrayLike)

//splice 改变了原来数组
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,2);