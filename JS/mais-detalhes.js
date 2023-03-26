function clickInfo () {
    var myImage = document.getElementById("flecha");
    myImage.style.transition = 'all .5s ease-in-out'
        if (myImage.style.transform == 'rotate(180deg)' ) {
            myImage.style.transform = 'rotate(0deg)';
        }else{
            myImage.style.transform = 'rotate(180deg)'
        }
        if(detalhes.style.display == 'block' )  {
            detalhes.style.display = 'none'
        }else {
            detalhes.style.display ='block'
        }
     }