const password = document.getElementById('password');
const icon = document.getElementsByName('icon');
var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'../IMG/login img/eye-off.svg', 
'../IMG/login img/eye.svg'

];


function showHide() {
    if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
    {
      currentImgIndex=0;
    }
    document.getElementById("eyes").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
      currentImgIndex++; // incrementa a nossa referencia

      if(password.type === 'password'){
        password.setAttribute ('type','text');
        icon.classList.add('hide')
    }
    else {
        password.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
}