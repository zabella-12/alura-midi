function tocaSom(idElementAudio){
   document.querySelector(idElementAudio).play()
}

const listaDeTleca = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTleca.length; contador++){

   const tecla = listaDeTleca[contador];
   const instrumento = tecla.classList[1];

   const idAudio = `#som_${instrumento}`;

   console.log(idAudio)
 
   tecla.onclick = function(){
      tocaSom(idAudio)
   }

   tecla.onkeydown = function(evento){
      if(evento.code === 'Space' || evento.code === 'Enter')
      tecla.classList.add('ativa')
   }

   tecla.onkeyup = function(){
      tecla.classList.remove('ativa')
   }

}

