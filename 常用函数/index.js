// 数组去重
var unique = function (arr, newArr) {
    var num;

    if (-1 == arr.indexOf(num = arr.shift())) newArr.push(num);

    arr.length && unique(arr, newArr);
}

// 数组求交集
var arr1 = [],
arr2 = [];
arr1.filter(function(n){
    return arr2.indexOf(n) != -1;
})
// 数组求并集
function arrayUnique(arr1, arr2) {
    var a = arr1.concat(arr2);
    var c = [];
    a.forEach(ele => {
        if (c.indexOf(ele) === -1) {
            c.push(ele)
        }
    });
    return a;
}

function arrayDiff(arr1, arr2) {
    var c =  arr1.filter(function(ele) {
        return arr2.indexOf(ele) <　0
    })
    return c;
}

//利用filter和indexOf方法
Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0;});
};


