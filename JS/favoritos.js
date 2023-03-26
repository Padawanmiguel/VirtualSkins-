var currentImgIndex=1;
var ImgSrcArray = [ //caminho das suas imgs aqui
'../IMG/heart copy.svg',
'../IMG/heart-outline.svg'
];
// FUNCTION PRODUTO 1
function trocar1(){

  if(currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
  {
    currentImgIndex=0;
  }
  document.getElementById("P1").src=ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
    currentImgIndex++; // incrementa a nossa referencia

}