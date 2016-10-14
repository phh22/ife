// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    if(arr.constructor==Array){
        return true
    }else{
        return false
    }
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if(typeof fn =="function"){
        return true
    }else{
        return false
    }
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    var clone;
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
    var b=a[0];
    var z=0;
    for(var i=0;i<arr.length;i++){
        for(var j=0;j< b.length;j++){
            if(arr[i] != b[j]){
                z++;
            }
            if(z===b.length-1){
                b[j].push(a[i]);
            }
        }
    }
    return b;
}

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    var b;
    for(var i=0;i<str.length;i++){
        if(str[i] != ""){
            for(var j=str.length-1;j>=i;j--){
                if(str[j] != ""){
                    b[j]=str[j];
                }
            }
        }
    }
}

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    var result ="";
    result = str.replace(/^s+|s+$/g,""); //使用正则进行字符串替换
    return result;
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    fn=function(item,index){
        for(var i=0;i<arr.length;i++){
            index=1;
            item=arr[i];
        }
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var b;
    for(var i in obj){
        b++;
    }
    return b;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    var a=/^\S+@\S+.com$/;
    return a.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
    var a =/^\d{11}$/;
    return a.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    if(!element.className){
        element.className = newClassName;
    }else{
        var newName=element.className;
        newName +=" ";
        newName +="newClassName";
        element.className = newName;
    }

}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    if(element.className == oldClassName){
        oldClassName="";
    }
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    if(element.parentNode === siblingNode.parentNode){
        return true;
    }else{
        return false;
    }
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var z ={};
    z.x=element.offsetLeft;
    z.y=element.offsetTop;
    return z;
}

// 实现一个简单的Query
function $(selector) {
    if (selector == document) {
        return document;
    }
    selector = selector.trim();
    if (selector.indexOf(" ") !== -1) {
        var selectorArr = selector.split(/\s+/);
        return VQuery(selectorArr[1], VQuery(selectorArr[0])[0])[0];
    } else {
        return VQuery(selector,document)[0];
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

// 实现一个简单的Query
function $(selector) {
    var sel=new RegExp("#");
    if(sel.exec(selector)){
        var id=document.getElementById(selector.replace(/\w+/));
    }



    var benzhu = function(n){
        if(n==0||n==1){
            return 1;
        }else if(n<=-1){
            return 0;
        }else{
            var chunzhu = n*benzhu(n-1);
        }
        return chunzhu
    }