
//converte para o formato de horas, minutos e segundos 
function getHoursSecond(segundos){
    const data = new Date(segundos * 1000)
    //Converte para o formato padrão brasileiro (HH:MM:SS).
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' 
    })
}

const paragrafo = document.getElementById('Cronometro')
let time;
let segundos = 0

function Iniciar (){

    clearInterval(time)
    paragrafo.classList = 'branco'

    time = setInterval(function(){
        segundos++
        paragrafo.innerText = getHoursSecond(segundos)
    }, 1000)
}


function Pausar(){
    paragrafo.classList = 'vermelho'
    clearInterval(time)
}


function Zerar(){
    paragrafo.classList = 'branco'
    clearInterval(time)
    paragrafo.innerHTML = '00:00:00'
    segundos = 0
}
