const X_CLASS ='x'; // Treecko
const Y_CLASS ='y'; // Mudkip
const Z_CLASS ='z'; // Torchic


// User selected on start screen function 

function Profile(){
    let selectedProfile = document.querySelectorAll('.start-game .img .id');
    selectedProfile.forEach(img => {
        img.addEventListener("click", e => {

            console.log(e.target.dataset.id);
        });
        
        //
    });
}

Profile()