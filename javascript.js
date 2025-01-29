
var i = 0
var interval

function cronometro(){

    interval = setInterval(function(){

        i += 1

        const segundos = (i/100).toFixed(2)
        document.getElementById('cronometro').innerHTML = segundos

        const minutos = segundos * 1

        if(minutos === 60 ){
            i = 0
            clearInterval(interval)
        }
        
    },10)

}

function parar(){
    clearInterval(interval)
}

function redefinir(){
    document.getElementById('cronometro').innerHTML = '0:00'
    i = 0
}