let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let msec = 0o0;
let secs = 0o0;
let mins = 0o0;

let timerid = null;

startBtn.addEventListener("click",function(){
    if(timerid !==null){
        clearInterval(timerid);
    }
    timerid= setInterval(startTimer,10);
});
stopBtn.addEventListener("click",function(){
    clearInterval(timerid);
});
resetBtn.addEventListener("click",function(){
    clearInterval(timerid);
    timerDisplay.innerHTML = `00 : 00 : 00`
})




function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++
        }
    }
    let msecString = msec < 10 ? `0${msec}`: msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    timerDisplay.innerHTML = `${minsString} : 
                  ${secsString}: ${msecString}`;
}