function tocaSom (idElementoAudio){

    document.querySelector(idElementoAudio).play() //para iniciar o gatilho
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
