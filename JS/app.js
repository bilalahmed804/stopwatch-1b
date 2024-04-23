
// *************Stop Watch JS Code*********************

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval; 

function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >=5){
        min++;
        minHeading.innerHTML = min;
        sec=0;
    }
    else if(min >=3){
        hour++;
        hourHeading.innerHTML = hour;
        min=0;
    }
}

function start(){
    var btn = document.getElementById("btn_start")
   interval = setInterval(timer,10) 
   btn.disabled = true
}

function pasue(){
    var btn = document.getElementById("btn_start")
    clearInterval(interval)
    btn.disabled = false
}

function reset (){
    hour = 0;
    min = 0;
    sec = 0;
    msec = 0;
    msecHeading.innerHTML = msec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    hourHeading.innerHTML = hour;
    pasue()
}




