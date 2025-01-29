
var i = 0
var interval

function cronometro() {
    interval = setInterval(function () {
        i += 1

        const segundosTotais = (i / 100).toFixed(2)
        const minutos = Math.floor(segundosTotais / 60)
        const segundos = Math.floor(segundosTotais % 60)

        
        const minutosFormatados = minutos.toString().padStart(2, '0')
        const segundosFormatados = segundos.toString().padStart(2, '0')

        document.getElementById('cronometro').innerHTML = `${minutosFormatados}:${segundosFormatados}`

        if (minutos === 60) {
            i = 0
            clearInterval(interval)
        }

    }, 10)
}

function parar() {
    clearInterval(interval)
}

function redefinir() {
    document.getElementById('cronometro').innerHTML = '00:00'
    i = 0
}
