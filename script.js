const X_CLASS ='x'; // Treecko
const Y_CLASS ='y'; // Mudkip
const Z_CLASS ='z'; // Torchic


// User selected on start screen function 

function Profile(){
    let selectedProfile = document.querySelectorAll('.start-game .img .id');
    selectedProfile.forEach(img => {
        img.addEventListener("click", e => {

            let target = e.target.dataset.id;
            removeImgSelection(selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("selected");
            
            console.log(e.target.dataset.id);
        });
        
        //
    });
}

Profile()


function removeImgSelection(img)
{
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}