// https://www.zhihu.com/question/24692840/answer/345583258
function propEq(prop, value) {
    return (obj) => {
        return obj && obj[prop] === value;
    }
}

function prop(key) {
    return (obj) => {
        return obj && obj[key];
    }
}
const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4},{id: 5}];
let x = data.filter(propEq('id', 6))
console.log(x);



// https://zhuanlan.zhihu.com/p/34974579   没看明白
//js的模块化
function Add(a, b) {
    return a + b;
}
function FzModule(module) {
    function Add() {
        return a + b;
    }
}

function Modules() {
    this.exports = {}
}
const newModule = new Modules()


function FzModule(modules) {
    function Add(a, b) {
        return a + b;
    }
    modules.exports = Add
    return modules;
}

function Modules() {
    this.exports = {}
}
const newModule = new Modules()
const fz = FzModule(newModule)