var altura = 0;
var largura = 0;

function alturaLargura(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura + " " + largura)
}

alturaLargura()

function posicaoMosquito(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
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

    console.log(x + " " + y)

    var mosquito = document.createElement('img')
    mosquito.src='pictures/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = x + 'px';
    mosquito.style.top = y + 'px';
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    console.log(randomSide())


}

function randomSize(){
    var classe = Math.floor(Math.random() * 3)
    console.log(classe)

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