const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#reset");
const  scoreDecider = document.querySelector("#playTo");

let p1score = 0;
let p2score = 0;
let winningScore = 0;
let isGameOver = false;

p1Button.addEventListener("click", function(){
    if(!isGameOver){
        p1score += 1;
        if(p1score === winningScore){
            isGameOver=true;
            p1Display.classList.add("winner")
            p2Display.classList.add("loser")
        }
    p1Display.textContent = p1score; 
    }
})

p2Button.addEventListener("click", function(){
    if(!isGameOver){
        p2score += 1;
        if(p2score === winningScore){
            isGameOver = true;
            p2Display.classList.add("winner")
            p1Display.classList.add("loser")
        }
     p2Display.textContent = p2score; 
    }
})

scoreDecider.addEventListener("change",function(){
    winningScore = parseInt(this.value);
    reset()
})

resetBtn.addEventListener("click", reset)

function reset(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
   p1Display.textContent = 0;
   p2Display.textContent = 0;
   p1Display.classList.remove("winner","loser")
   p2Display.classList.remove("winner","loser")
}
