var temperatura = [12, 15.5, 13, 22, 21, 28, 12, 14, 14, 15, 26.4, 23.2, 17, 19, 31, 32, 26, 25.3, 18, 15, 26.4, 23.2, 17, 19, 31, 32, 26, 25.3, 18, 19.6]
        
var tempMedia = temperatura.reduce(function(media, value, index, array){
    let peso = 1/temperatura.length
     media += value * peso
     return media
}, 0)

var output = document.getElementById("idOut")

var btTestarDia = document.getElementById("idBtTestarDia")

btTestarDia.onclick = function(){

    let dia = Number(document.getElementById("idDia").value)

    if (temperatura[dia] > tempMedia) {
        output.value = `A temperatura (${temperatura[dia]}) do dia ${dia} está acima da média ${tempMedia}`         
    } else if(temperatura[dia] < tempMedia) {
        output.value = `A temperatura (${temperatura[dia]}) do dia ${dia} está abaixo da média ${tempMedia}`           
    } else {
        output.value = `A temperatura (${temperatura[dia]}) do dia ${dia} está na média ${tempMedia}`           
    }
}