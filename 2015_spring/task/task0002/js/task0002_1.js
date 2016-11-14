/**
 * Created by Administrator on 2016/11/13 0013.
 */
function send_1(){
    var hobbyArr = document.getElementsByClassName("hobby")[0].value;
    var arrEnd = 0,arrStart = 0,newArr=[],str="";
    for(var i=0;i<hobbyArr.length-1;i++){
        if(hobbyArr[i] == "，" || hobbyArr[i] == ","){
            arrEnd = i;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
            arrStart = i+1;
        }else if(i == hobbyArr.length-1 && hobbyArr[i] != "," && hobbyArr[i] != "，"){
            arrEnd = hobbyArr.length;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
        }
    }
    var newArry = uniqArray(newArr);
    var hobby1 = document.getElementById("hobby1");
    hobby1.innerHTML = newArry;
}

function send_2(){
    var hobbyArr = document.getElementsByClassName("hobby")[1].value;
    var arrEnd = 0,arrStart = 0,newArr=[],str="";
    for(var i=0;i<=hobbyArr.length-1;i++){
        if(hobbyArr[i] == "，" || hobbyArr[i] == "," || hobbyArr[i] == " " || hobbyArr[i] == "\n" || hobbyArr[i] == "、" || hobbyArr[i] == "；" || hobbyArr[i] == ";" ){
            arrEnd = i;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
            arrStart = arrEnd + 1;
        }else if(i == hobbyArr.length-1 && hobbyArr[i] != "," && hobbyArr[i] != "，" && hobbyArr[i] != " " && hobbyArr[i] != "\n" && hobbyArr[i] != "、" && hobbyArr[i] != "；" && hobbyArr[i] != ";"){
            arrStart = arrEnd + 1;
            arrEnd = hobbyArr.length;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
        }
    }
    var newArry = uniqArray(newArr);
    var hobby1 = document.getElementById("hobby2");
    hobby1.innerHTML = newArry;
}

function send_3(){
    var hobbyArr = document.getElementsByClassName("hobby")[2].value;
    var arrEnd = 0,arrStart = 0,newArr=[],str="";
    for(var i=0;i<=hobbyArr.length-1;i++){
        if(hobbyArr[i] == "，" || hobbyArr[i] == "," || hobbyArr[i] == " " || hobbyArr[i] == "\n" || hobbyArr[i] == "、" || hobbyArr[i] == "；" || hobbyArr[i] == ";" ){
            arrEnd = i;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
            arrStart = arrEnd + 1;
        }else if(i == hobbyArr.length-1 && hobbyArr[i] != "," && hobbyArr[i] != "，" && hobbyArr[i] != " " && hobbyArr[i] != "\n" && hobbyArr[i] != "、" && hobbyArr[i] != "；" && hobbyArr[i] != ";"){
            arrStart = arrEnd + 1;
            arrEnd = hobbyArr.length;
            str = hobbyArr.substring(arrStart,arrEnd);
            newArr.push(str);
        }
    }
    if(newArr.length>10 || newArr.length<1){
        $("#warn").innerHTML = "警告！警告！";
        $("#warn").style.color = "red";
        return;
    }else{
        $("#warn").innerHTML = "";
    }
    var newArry = uniqArray(newArr);
    for(var i=0;i<newArry.length;i++){
        var inp = document.createElement("input");
        inp.type="checkbox";
        $("#hobby3").appendChild(inp);
        var span = document.createElement("span");
        span.innerHTML = newArry[i];
        $("#hobby3").appendChild(span);
    }
}