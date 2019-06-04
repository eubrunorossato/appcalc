var altura = 0;
var largura = 0;
var coracoesAfetados = 0;
var teste = false;
tempoRestante = 20;
var criaMosquitoTempo = 1500;

var nivel = window.location.search;
var nivel = nivel.replace('?', '')

if(nivel === 'facil'){
    criaMosquitoTempo = 1500
}else if(nivel ==='medio'){
    criaMosquitoTempo = 1000
}else{
    criaMosquitoTempo = 750
}

function mosquitoLoop(){
    setInterval(function() {
        posicaoMosquito() 
    }, 3000)
}

function alturaLargura(){
    altura = window.innerHeight
    largura = window.innerWidth
}

alturaLargura()

function randomSize(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0 : return 'mosquito1'

        case 1 : return 'mosquito2'

        case 2 : return 'mosquito3'
    }

}

function randomSide(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0 : return 'ladoB'

        case 1 : return 'ladoA'
    }
}

function cronometro(){

    if(tempoRestante === 0){
        window.location.replace("voce_ganhou.html")
    } 

       tempoRestante-=1 
       document.getElementById('cronometro').innerHTML = tempoRestante
    return tempoRestante  
}

function iniciarJogo(){
    nivel = document.getElementById('nivel').value

    if(nivel === ''){
        alert('Selecione um nivel para iniciar o jogo')
        return false;
    }

    window.location.href = 'game_page.html?' + nivel

}

function posicaoMosquito(){     

    if(document.getElementById('mosquito')){
        coracoesAfetados += 1;
        document.getElementById('mosquito').remove()

        if(coracoesAfetados === 3){
            window.location.replace("game_over_page_bootStrap.html")
        }else{
            document.getElementById('v' + coracoesAfetados).src = "pictures/coracao_vazio.png"
        }

    }

    var x = Math.floor(Math.random() * largura) - 90
    var y = Math.floor(Math.random() * altura) - 90

        if(x<0){
            x = 0
        } else{
            x = x
        }

        if(y<0){
            y = 0
        } else{
            y = y
        }


    var mosquito = document.createElement('img')
    mosquito.src='pictures/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = x + 'px';
    mosquito.style.top = y + 'px';
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick=function(){
        this.remove()
        //mosquitoLoop()
    }
}

function paginaInicial(){
    window.location.href = "pagina_inicial_bootStrap.html"
}
