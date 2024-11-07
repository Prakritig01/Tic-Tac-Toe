let boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , ()=>{
        console.log("block was clicked");
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;

        }
        else{
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function checkWinner(){
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerHTML;
        let pos2Val = boxes[pattern[1]].innerHTML;
        let pos3Val = boxes[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                setTimeout(() => {
                    boxes[pattern[0]].classList.add("winner");
                    boxes[pattern[1]].classList.add("winner");
                    boxes[pattern[2]].classList.add("winner");
                    disableAllBoxes();
                }, 10);
                break;
            }
        }
    }
}

function disableAllBoxes(){
    boxes.forEach((box) =>{
        box.disabled = true;
    })
}

function resetAll() {
    boxes.forEach((box) =>{
        box.innerHTML = "";
        box.disabled = false; 
        box.classList.remove("winner"); 
    })
    turn0 = true;
}

resetBtn.addEventListener("click" , resetAll);
