let boxTop = 200;
let boxLeft = 200;

document.addEventListener("keydown", (event) => {
  const keyName = document.getElementById('box');
  let teclado = event.keyCode;
  //37 - ESQUERDA; 38 - CIMA; 39 - DIREITA; 40 - BAIXO

  if(teclado == 37){
      boxLeft = boxLeft - 10;
      keyName.style.left = boxLeft + 'px'
  } if(teclado == 38){
      boxTop = boxTop - 10;
      keyName.style.top = boxTop + 'px'
  } if(teclado == 39){
      boxLeft = boxLeft + 10;
      keyName.style.left = boxLeft + 'px'
  } if(teclado == 40){
      boxTop = boxTop + 10;
      keyName.style.top = boxTop + 'px'
  }
  
});


