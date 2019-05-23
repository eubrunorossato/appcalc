var altura = 0;
var largura = 0;

function alturaLargura(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura + " " + largura)
}

alturaLargura()

function posicaoMosquito(){

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
    mosquito.className = 'mosquito1'
    mosquito.style.left = x + 'px';
    mosquito.style.top = y + 'px';
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
}