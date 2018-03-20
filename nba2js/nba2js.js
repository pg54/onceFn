// call, bind, bind
var sCurry = {
    shot: function() {
        console.log('3 bang!')
    }
}
var aRoberson = {
    steal: function() {
        console.log('ball all in my hand!')
    }
}
sCurry.shot.call(aRoberson)


//类数组对象
// 怎么判断是数组
