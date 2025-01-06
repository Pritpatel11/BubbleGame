var Time = 60;
var score = 0;
var value;
var p_btm = document.querySelector(".pbtm");

function makebubble(){
    var value = Math.floor(Math.random() * 10);


var cluter = "";


for(var i=1;i<=168;i++){
    var value = Math.floor(Math.random() * 10);
    cluter += `<div class="bubal">${value}</div>`;
}
p_btm.innerHTML = cluter;
}

function RunTime(){
    
    var htime = document.getElementById("Timer")
    var count = setInterval(function(){
        if(Time>0){
            Time--;
            htime.innerHTML = Time;
        }
        else{
            p_btm.innerHTML = `<h1>Game Over Your Score:${score}</h1>`;
            clearInterval(count);
        }
        
    },1000);
}

function getNewHit(){
    value = Math.floor(Math.random() * 10);
    var hit = document.getElementById("hit");
    // console.log(val); 
    hit.innerHTML = value;
}

function increScores(){
    score = score + 10;
    var Hscore = document.getElementById("Score");
    Hscore.innerHTML = score;
}

p_btm.addEventListener("click",function(elm){
    // console.log(elm.target.textContent);
    var clicknumber = Number(elm.target.textContent);
    if(clicknumber == value){
        increScores();
        makebubble();
        getNewHit();
    }
}) 


RunTime();

makebubble();

getNewHit();
