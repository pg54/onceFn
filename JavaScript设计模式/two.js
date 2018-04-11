// 工厂函数
var Human = function (param) {
    this.skill = param && para.skill || "保密";
}
Human.prototype = {
    getSkill: function() {
        return this.skil;
    }
}
var Named = function(name) {
    var that = this;
    (function(name, that) {
        that.wholeName = name;
    })(name, that)
}
var Work = function(work) {
    var that = this;
    (function(work, that) {
        switch(work) {
            case 'code':
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '设计更是一种艺术';
            case 'teach':
                that.work = '教师';
                that.workDescript = '分享也是一种快乐';
            default:
                that.work = work;
                that.workDescript = '对不起，我们不能提供你所选择的职务的相关描述';
        }
    })(work, that)
}
Work.prototype.changWork = function(work) {
    this.work = work;
}
Work.prototype.changeDescript = function(setence) {
    this.workDescript = setence;
}

var Person = function(name, work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}