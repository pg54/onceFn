// 模板模式
var Alert = function (data) {
    if (!data) {
        return
    }
    this.content = data.content;
    this.panel = document.createElement('div');
    this.contentNode = document.createElement('div');
    


}
Alert.prototype = {

}