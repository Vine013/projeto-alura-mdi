function TocaSomPom (){
    document.querySelector('#som_tecla_pom').play() //para iniciar o gatilho
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Definimos uma constante para a captura das informações

listaDeTeclas[0].onclick = TocaSomPom;