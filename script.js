const X_CLASS ='x'; // Treecko
const Y_CLASS ='y'; // Mudkip
const Z_CLASS ='z'; // Torchic

let GAME =
{
    X_CLASS:"x",
    Y_CLASS:'y',
    Z_CLASS:'z',

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

            if (target == 'x' || target == 'y'){
                GAME.X_CLASS = "x",
                GAME.Y_CLASS = "y";
                GAME.Y_CLASS="z";
            }


            GAME.turn = target == 'z'||target =='y'? true: false;
           


        });
        
        //
    });
}

GAME.startBtn.addEventListener("click", startGame);

Profile()

function startGame(){
    /*console.log("Game Started");*/
    GAME.startWindow.classList.add("hide");
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

