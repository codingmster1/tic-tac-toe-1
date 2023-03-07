const X_CLASS ='x'; // Treecko
const Y_CLASS ='y'; // Mudkip
 
const WIN_COMBINATIONS =
[
    [
        
    ]
]

let GAME =
{
    X_CLASS:"x",
    Y_CLASS:'y',
    

    turn: undefined,

    selectedProfile: document.querySelectorAll(".img .id"),
    blockElements: document.querySelectorAll('[data-cell]'),
    boardElement: document.getElementById("board"),
    startBtn: document.getElementById("startBtn"),
    startWindow: document.querySelector(".start-game"),

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
    return turns = !turns;
}

