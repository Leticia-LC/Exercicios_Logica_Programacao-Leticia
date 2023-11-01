var num = []

var btIncluir = document.getElementById("idIncluir")
var btOrdemCres = document.getElementById("idOrdemCres")
var btOrdemDecres = document.getElementById("idOrdemDecres")
var btOrdemCresSort = document.getElementById("idOrdemCresSort")
var btOrdemDecresSort = document.getElementById("idOrdemDecresSort")

var saida = document.getElementById("idOut")

btIncluir.onclick = function () {
    num.push(Number(document.getElementById("idNum").value))
    console.table(num)
}

btOrdemCres.onclick = function () {

    var trocou = true
    while (trocou) {
        trocou = false
        for (let i = 0; i < (num.length - 1); i++) {
            if (num[i] > num[i + 1]) {
                let aux = num[i]
                num[i] = num[i + 1]
                num[i + 1] = aux
                trocou = true
            }
        }
    }

    saida.value = num.toString()

}

btOrdemDecres.onclick = function () {
    var trocou = true
    while (trocou) {
        trocou = false
        for (let i = 0; i < (num.length - 1); i++) {
            if (num[i] < num[i + 1]) {
                let aux = num[i]
                num[i] = num[i + 1]
                num[i + 1] = aux
                trocou = true
            }
        }
    }

    saida.value = num.toString()
}

btOrdemCresSort.onclick = function () {

    saida.value = num.sort(function (a, b) {
        if (a > b) {
            return 1
        }
        if (a < b) {
            return -1
        }
        return 0
    }).toString()
}

btOrdemDecresSort.onclick = function () {

    saida.value = num.sort(function (a, b) {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }
        return 0
    }).toString()
}