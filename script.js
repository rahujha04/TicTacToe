

let ting = new Audio("ting.mp3");

let turn = 'X';

const changeTurn = () =>{
      if(turn=='X')return 'O';
      else return 'X';
}

let gameOver = false;
const checkWin = () =>{
    let boxes = document.getElementsByClassName("box");

    // check for all rows
    for(let i=0;i<8;i+=3){
        if(boxes[i].innerText == boxes[i+1].innerText && boxes[i+1].innerText==boxes[i+2].innerText && boxes[i].innerText!=""){
            gameOver = true;
        }
    }
    // check for all columns
    for(let i=0;i<3;i++){
        if(boxes[i].innerText == boxes[i+3].innerText && boxes[i+3].innerText==boxes[i+6].innerText && boxes[i].innerText!=""){
            gameOver = true;
        }
    }
    // check for both diagonals

    if(boxes[0].innerText==boxes[4].innerText && boxes[4].innerText==boxes[8].innerText && boxes[0].innerText!=""){
        gameOver = true;
    }
    if(boxes[2].innerText==boxes[4].innerText && boxes[4].innerText==boxes[6].innerText && boxes[2].innerText!=""){
        gameOver = true;
    }

    if(gameOver){
        let turning = document.querySelector(".turning");
        turning.style.display = "none";
        let winner = document.querySelector(".Info");
                if(turn=='X'){
                    winner.innerText = "Player 2";
                }else{
                    winner.innerText = "Player 1";
                }
                let gif = document.querySelector(".gif");
                gif.style.visibility = "visible";
                let victory = new Audio("victory.mp3");
                victory.play();
    }
}


let turnInfo = document.querySelector(".turnInfo");

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            console.log(gameOver);
            if(!gameOver){
                turnInfo.innerText = turn;
            }
        }
    })
})

let reset = document.querySelector(".reset");
reset.addEventListener('click',()=>{
    Array.from(boxes).forEach(element=>{
        let boxtext = element.querySelector('.text');
        boxtext.innerText = '';
    })
})