// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return arr instanceof Array;
    // your implement
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return fn instanceof Function;
    // your implement
}

function cloneObject(src){
    var aa;
    if(src instanceof Array){
        aa=[];
    }else{
        aa={};
    }
    if(typeof src == "number" || typeof src == "string" || typeof src == "boolean"){
        aa = src;
    }else{
        for(var i in src){
            if(typeof src[i] == "number" || typeof src[i] == "string" || typeof src[i] == "boolean"){
                aa[i] = src[i];
            }else{
                aa[i] = cloneObject(src[i]);
            }
        }
    }
    return aa;
}


//学习数组、字符串、数字等相关方法，在util.js中实现以下函数
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        var x=0;
        for(var j=0;j<newArr.length;j++){
            if(arr[i] == newArr[j]){
                x++;
            }
        }
        if(x == 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    for(var i=0;i<str.length;i++){
        for(var j=str.length-1;j>0;j--){
            if(str[i] != " " && str[j] != " "){
                return str.substring(i,j);
            }
        }
    }
}

function trim(str) {
    var aa = str.replace(/^\s*|\s*$/g,"");
    return aa;
    // your implement
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    var item, index;
    for(var i=0;i<arr.length;i++){
        item = arr[i];
        index = i;
        fn(item,index);
    }
    return fn;
}

// 其中fn函数可以接受两个参数：item和index


// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var x=0;
    for(var i in obj){
        x++;
    }
    return x;
}

//学习正则表达式，在util.js完成以下代码
// 判断是否为邮箱地址
function isEmail(emailStr) {
    var email = /^\S+(@)\S+(.)com$/;
    return email.test(emailStr);
    // your implement
}

// 判断是否为手机号
function isMobilePhone(phone) {
    var phe = /^1\w{10}/;
    return phe.test(phone);
    // your implement
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    if(!element.className){
        element.className = newClassName;
    }else{
        var newName = element.className;
        newName += newClassName;
        element.className = newName;
    }
    // your implement
}

function removeEvent(element, event, listener) {
    element.removeEventListener(event,listener);
    // your implement
}

function addEvent(element, event, listener) {
    element.addEventListener(event,listener);
    // your implement
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
        element.className.replace(oldClassName,"");
    // your implement
}

$.on = function(element, event, listener){
    addEvent(element, event, listener);
};
$.un = function(element, event, listener){
    removeEvent(element, event, listener)
};
$.click = function(element, listener){
    addClickEvent(element, listener)
};
$.enter= function(element, listener){
    addEnterEvent(element, listener)
};


// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
    element.addEvent(eventName,function(e){
        if(e.target.nodeName == tag){
            listener();
        }
    });
}


$.on = function(selector, event, listener) {
    $(selector).addEvent(event, listener);
    // your implement
};

$.click = function(selector, listener) {
    $(selector).addEvent("click", listener);
    // your implement
};

$.un = function(selector, event, listener){
    $(selector).removeEvent(event, listener);
    // your implement
};

$.delegate = function(selector, tag, event, listener) {
    $(selector).addEvent(event,function(e){
        if(e.target.nodeName == tag){
            listener();
        }
    });
    // your implement
};

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode == siblingNode.parentNode;
    // your implement
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
var s={};
s.x=0;
s.y=0;
function getPosition(element) {
    var body = document.getElementsByTagName("body")[0];
    if(element.parentNode == body){
        s.x += element.offsetLeft;
        s.y += element.offsetTop;
        return s;
    }else{
        s.x += element.offsetLeft;
        s.y += element.offsetTop;
        getPosition(element.parentNode);
    }
}

// 实现一个简单的Query
function $(selector) {
    if(/\d^#\d/){
        selector = selector.replace("#","");
        return document.getElementById(selector);
    }else if(/^\S/){
        return document.getElementById(selector);
    }else if(/^(.)/){
        selector = selector.replace(".","");
        return document.getElementById(selector);
    }
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    element.addEventListener(event,listener);
    // your implement
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    element.removeEventListener(event.listener);
    // your implement
}
//接下来我们实现一些方便的事件方法

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element,"click",listener);
    // your implement
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,"keyup",function(e){
        if(e.which == 13){
            listener();
        }
    });
    // your implement
}

// 判断是否为谷歌浏览器，返回-1或者版本号
function isIE() {
    return /\dChrome\d/.test(window.navigator.userAgent);
    // your implement
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    document.cookie = cookieName+"="+cookieValue;
    // your implement
}

// 获取cookie值
function getCookie(cookieName) {
    var start = document.cookie.indexOf(cookieName);
    start += cookieName.length;
    var end = document.cookie.indexOf(cookieName,"=");
    if(end = -1){
        end = document.cookie.length;
    }
    return document.cookie.indexOf(start,end);
    // your implement
}

//学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：

//
function ajax(url, options) {
    if(!options.type){
        options.type = "GET";
    }
    var aa = "";
    if(typeof options.data == "string"){
        aa = options.data;
    }else{
        for(var i in options.data){
            aa += i+"="+options.data[i]+"&";
        }
        aa[aa.length-1]="";
    }
    var XML = new XMLHttpRequest();
    XML.onreadystatechange = function(){
        if(XML.readyState == 4 && XML.status == 200){
            options.onsuccess(options.responseText,XML);
        }else if(options.onfail){
            options.onfail();
        }

    };
    XML.open(options.type,url);
    XML.send(aa);
    // your implement
}