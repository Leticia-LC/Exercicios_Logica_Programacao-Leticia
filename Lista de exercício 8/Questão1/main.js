var frutas = ["tomate", "morango", "limão", "Abacaxi", "Pêra", "Uva"]

let datalist = document.getElementById("idFrutas")
frutas.forEach(function (element, index) {
    let option = document.createElement("option")
    option.innerText = element
    option.id = index
    datalist.appendChild(option)
})