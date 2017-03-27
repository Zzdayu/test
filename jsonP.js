
// 格式化字符串
function json2str(data) {
    // 0.添加随机因子
    data.t = Math.random();
    // 1.定义一个数组
    var arr = [];
    // 2.遍历传入的json对象
    for(var key in data){
        // 3.将json转化为数组
        arr.push(key+"="+encodeURI(data[key]));
    }
    // 4.将数组转化为固定格式的字符串
    return arr.join("&");
}
// 跨域访问
function jsonP(url,cbName, data, fn) {
    // 随机生成一个名称
    var callBackName = ("njQuery_"+Math.random()).replace(".", ""); // njQuery_0.12354
    window[callBackName] = function(json) {
        fn && fn(json);
    }
    data[cbName] = callBackName;
    data = json2str(data);

    // 1.创建script标签
    var oScript = document.createElement("script");
    // 2.设置跨域访问的URL
    oScript.src = url+"?"+data;
    // 3.将script标签添加到body中
    document.body.appendChild(oScript);

}