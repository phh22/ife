/**
 * Created by Administrator on 2016/10/18 0018.
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return arr.constructor==Array;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    return fn.constructor==Function;
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var clone = new Object();
    if(src.constructor == Number ||src.constructor == String ||src.constructor == Boolean){
        clone=src;
    }else if(src.constructor == Object || src.constructor == Array){
        for(var j in src){
            if(src[j].constructor == Number ||src[j].constructor == String ||src[j].constructor == Boolean){
                clone[j]=src[j];
            }else if(src[j].constructor == Object || src[j].constructor == Array){
                clone[j]=cloneObject(src[j]);
            }
        }
    }
    return clone;
}

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var b = [];b[0]=arr[0];
    for(var i=0;i<arr.length;i++){
        var z=0;
        for(var j=0;j< b.length;j++){
            if(arr[i] != b[j]){
                z++;
            }
        }
        if(z === b.length){
            b.push(arr[i]);
        }
    }
    return b;
}

// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    var simp="";
    for(var i=0;i<str.length;i++){
        if(str[i] != " "){
            break;
        }
    }
    for(var j=str.length-1;j>=i;j--){
        if(str[j] != " "){
            break;
        }
    }
    for(var k=i;k<=j;k++){
        simp+=str[k];
    }
    return simp;
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    if(/^\s+|\s+$/g.test(str)){
        str = str.replace(/^\s+|\s+$/g,"");
    }
    return str;
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for(var i=0;i<arr.length;i++){
        item = arr[i];
        index = i;
        fn(item, index);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var z=0;
    for(var i in obj){
        z++;
    }
    return z;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
    return /^\S+@\S+.com$/.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    return /^\d[11]$/.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    if(!element.className){
        element.className=newClassName;
    }else{
        element.className=element.className+" "+newClassName;
    }
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    element.className=element.className.replace(oldClassName,"");
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode == siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var s={};
    var a= 0,b=0;
    var body=document.getElementsByTagName("body")[0];
    if(element.parentNode == body){
        a=element.offsetLeft;
        b=element.offsetTop;
    }else{
        while(element.parentNode != body){
            a+=element.offsetLeft;
            b+=element.offsetTop;
            element = element.parentNode;
        }
        a+=element.offsetLeft;
        b+=element.offsetTop;
    }
    s.z=a;
    s.y=b;
    return s;
}
element = document.getElementById("qqq");
getPosition(element);


// 实现一个简单的Query
function $(selector) {
    var b="";
    for(var i=1;i<selector.length;i++){
        b+=selector[i];
    }
    if(selector[0]="#"){
        return document.getElementById(b);
    }else if(selector[0] !="#" ||selector[0] !="." ||selector[0] !="[" ){
        b=selector[0]+b;
        return document.getElementsByTagName(b);
    }else if(selector[0] =="."  ){
        return document.getElementsByClassName(b)[0];
    }else if(selector[0] =="["  ){
        b = b.substring(0, b.length - 1);
        return document.attribute(b)[0];
    }
}


// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    } else {
        element["on" + event] = listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);
    } else {
        element["on" + event] = null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element, "keydown", function (ev) {
        var oEvent = ev || window.event;
        if (oEvent.keyCode === 13) {
            listener();
        }
    });
}

// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    return addEvent(element, eventName, function (ev) {
        var oEvent = ev || event; //兼容处理
        var target = oEvent.target || oEvent.srcElement; //兼容处理
        if (target.tagName.toLocaleLowerCase() === tag) {
            listener.call(target, oEvent); //使用call方法修改执行函数中的this指向，现在this指向触发了事件的HTML节点（可直接使用this.innerHTML返回该节点内容）
        }
    })
}
$.delegate = delegateEvent;

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    var explorer = window.navigator.userAgent.toLowerCase() ;
    if (explorer.indexOf("msie") >= 0) {
        var ver=explorer.match(/msie ([\d.]+)/)[1];
        return {type:"IE",version:ver};
    }else{
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=cookieName+ "=" +encodeURIComponent(cookieValue)+ ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(cookieName + "=");
        if (c_start!=-1)
        {
            c_start=c_start + cookieName.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
}

//学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
function ajax(url, options) {
        var xmlhttp=new XMLHttpRequest();
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                var text = xmlhttp.responseText;
                options.onsuccess(text, xmlhttp);
            }
        };
        xmlhttp.open("POST",url,true);
    debugger;
        xmlhttp.send("name="+options.data.name+"&password="+options.data.password);
}



function getCookie(c_name)
{
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            debugger;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}
function setCookie(c_name,value,expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+ ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}
function checkCookie() {
    username=getCookie('username');
    if (username!=null && username!="") {
        alert('Welcome again '+username+'!')
    } else {
        username=prompt('Please enter your name:',"");
        if (username!=null && username!="")
        {
            setCookie('username',username,365)
        }
    }
}













