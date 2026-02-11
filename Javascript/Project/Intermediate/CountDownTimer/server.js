
let display = document.getElementById("countDownTimer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let time = 0;
let interval = null;

// START
startBtn.addEventListener("click", ()=>{

    if(interval !== null) return; // prevent multiple timers

    interval = setInterval(()=>{
        time++;
        display.innerText = time;
    },1000);

});

// STOP
stopBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    interval = null;
});

// RESET
resetBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    interval = null;
    time = 0;
    display.innerText = 0;
});
