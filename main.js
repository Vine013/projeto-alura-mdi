function tocaSom (seletorAudio){

   const elemento = document.querySelector(seletorAudio) //para iniciar o gatilho

    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else
    {
        console.log('Elemento não encontrado ou Seletor inválido!');

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Definimos uma constante para a captura das informações

for (let i = 0; i < listaDeTeclas.length; i++) {    

    const tecla = listaDeTeclas[i]; //Definindo como uma constante o item que está no while
    const instrumento = tecla.classList[1]; //Verificando o instrumento baseado na Classe da Lista e do contador
    const idAudio = `#som_${instrumento}`; //usa crase - facilita interpolação
    
    listaDeTeclas[i].onclick = function (){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function(evento){
        
        console.log(evento.code == 'Enter')

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }
}
