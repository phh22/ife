/**
 * Created by Administrator on 2016/11/14 0014.
 */
function getDate(){
    var toDate = document.getElementsByClassName("getDate")[0].value;
    if(toDate.length < 10){
        alert("格式错误，请重新输入");
        return;
    }
    //获取设置的时间
    var Y = toDate.substr(0,4),
        M = toDate.substr(5,2),
        D = toDate.substr(8,2);
    //获取当前的时间
    var nowData = new Date();
    var nowY = nowData.getFullYear(),
        nowM = nowData.getMonth()+1,
        nowD = nowData.getDate(),
        nowH = nowData.getHours(),
        nowMin = nowData.getMinutes(),
        nowS = nowData.getSeconds();
    //获取距离的时间
    var differD = (Y-nowY)*365+(M-nowM)*7+(D-nowD)-1,
        differH = 23-nowH,
        differM = 59-nowMin,
        differS = 59-nowS;
    if(differD<0 || differH<0 || differM <0 || differS<0){
        alert("过期啦！");
        return;
    }
    var getId = setInterval(function(){
        differS--;
        if(differS <= 0){
            differM--;
            if(differM > 0){
                differS = 59;
            }else{
                differS = 0;
            }
        }
        if(differM <= 0){
            differH--;
            if(differH > 0){
                differM =59;
            }else{
                differM = 0;
            }
        }
        if(differH <= 0){
            differD--;
            if(differD > 0){
                differH = 23;
            }else{
                differD = 0;
                differH = 0;
            }
        }
        if(differD == 0 && differH == 0 && differM == 0 && differS == 0){
            clearInterval(getId);
        }
        var a = differD+":"+ differH+":"+ differM+":"+ differS;
        var aa = document.getElementById("displayTime");
        aa.innerHTML = a;
    },1000);
    //differTime();
    //function twoNum(i){
    //    if(i.length == 1){
    //        i = "0"+i;
    //    }
    //    return i;
    //}
    //setInterval(differTime,1000);
}