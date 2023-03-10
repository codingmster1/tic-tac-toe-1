const X_CLASS ='x'; // Treecko
const Y_CLASS ='y'; // Mudkip
 

/*------------------ Win Logic ----------------*/
const WIN_COMBINATIONS =
[
    [0,1,2], //horizontal
    [3,4,5],
    [6,7,8],
    [0,3,6], //vertical
    [1,4,7],
    [2,5,8],
    [0,4,8], //diagonal
    [2,4,8]

];

function checkWin(currentClass, blockElements)
{
    let winMatch = [];

    WIN_COMBINATIONS.some(combination => {
        winMatch.push(combination.every(index => {

            return blockElements[index].classList.contains(currentClass);
            /*return index;*/
        }));
    })

    //console.log(winMatch);
    return winMatch || null;
}


/* ------------------ End of Win Logic --------------- */
let GAME =
{
    X_CLASS:"x",
    Y_CLASS:'y',
    

    turn: undefined,

    selectedProfile: document.querySelectorAll(".img .id"),
    blockElements: document.querySelectorAll('[data-cell]'),
    winner: null,
    boardElement: document.getElementById("board"),
    startBtn: document.getElementById("startBtn"),
    startWindow: document.querySelector(".start-game"),
    winEl: document.querySelector(".winner-msg"),
    drawEl: document.querySelector(".draw-msg"),
    winnerImg: document.querySelector(".winner-msg .winner")

}

// User selected on start screen function 

function Profile(){
    /*selectedProfile = document.querySelectorAll('.start-game .img .id');*/
    GAME.selectedProfile.forEach(img => {
        img.addEventListener("click", e => {

            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            
            //console.log(e.target.dataset.id);

            if (target == 'x2' || target == 'y2'){
                GAME.X_CLASS = "x2",
                GAME.Y_CLASS = "y2";
                
            }


            GAME.turn = target == 'y'||target =='y2'? true: false;
           


        });
        
        //
    });
}

GAME.startBtn.addEventListener("click", startGame);

Profile()

function startGame(){
setHoverEffect();
    
    //Click Event on each cell
GAME.blockElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})



GAME.startWindow.classList.add("hide");
    
}

// operates x and y logic with click 
function handleClick(e)
{
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    markCell(cell, currentClass);

    /* check winner */
    let flag = checkWin(currentClass, GAME.blockElements).filter((win, index) => {
    if (win){
        
        /* -------- Add background to winner ---------*/
        WIN_COMBINATIONS[index].map(i => {
        GAME.blockElements[i].classList.add('win');
        })
        
        
        GAME.winner = GAME.blockElements[WIN_COMBINATIONS[index][0]];
        return win !== false;
        //console.log(GAME.winner);
        
        
        
        
        //console.log("Win")
        //console.log(index)
    }

    });
    //console.log(flag);

    /*-------------- check for win or draw -----------*/

    if(flag.length){
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);
    }else {
        console.log("draw");
    }


    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}




function removeImgSelection(img)
{
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}

function setHoverEffect(){
GAME.boardElement.classList.remove(GAME.X_CLASS);
GAME.boardElement.classList.remove(GAME.Y_CLASS);
    if(GAME.turn){
        GAME.boardElement.classList.add(GAME.Y_CLASS);
    }else {
        GAME.boardElement.classList.add(GAME.X_CLASS);
    } 
    
}

// current user in cell
function markCell(cell, currentClass)
{
    cell.classList.add(currentClass)
}

// swaps user turns
function swapTurns(turns)
{
    return turns =!turns;
}

function endGame(draw, winEl, DrawEl)
{
    if(!draw){
    winEl.classList.add("show");
    } else {
    drawEl.classList.add("show");
    
    }
}

