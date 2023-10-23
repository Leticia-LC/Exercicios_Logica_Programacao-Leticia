var nomeAluno = []
var endereco = []
var nomeMae = []
var nomePai = []
var telefone = []
var nota1 = []
var nota2 = []
var nota3 = []
var nota4 = []

const formulario = document.getElementById("idForm")
var menu = document.getElementById("idMenu")

menu.onclick = function () {
    const opcao = document.querySelector("input[name=nmTela]:checked")
    switch (opcao.id) {
        case "idRdCadAluno":
            document.getElementById("idTelaCad").hidden = false
            document.getElementById("idTelaNotas").hidden = true
            document.getElementById("idTelaConsulta").hidden = true
            break;

        case "idRdCadNota":
            document.getElementById("idTelaCad").hidden = true
            document.getElementById("idTelaNotas").hidden = false
            document.getElementById("idTelaConsulta").hidden = true
            carregarDataList(document.getElementById("idAlunoNotas"), nomeAluno)
            break;

        case "idRdConsulta":
            document.getElementById("idTelaCad").hidden = true
            document.getElementById("idTelaNotas").hidden = true
            document.getElementById("idTelaConsulta").hidden = false
            break;

    }

}

var btSalvarCad = document.getElementById("idBtSalvarCad")

btSalvarCad.onclick = function () {
    const aluno = validaCampoString(document.getElementById("idNomeAluno"))
    if (!aluno) {
        return
    }

    const end = validaCampoString(document.getElementById("idEndereco"))
    if (!end) {
        return
    }

    const mae = validaCampoString(document.getElementById("idNomeMae"))
    if (!mae) {
        return
    }

    const pai = validaCampoString(document.getElementById("idNomePai"))
    if (!pai) {
        return
    }

    const tel = validaCampoString(document.getElementById("idTelefone"))
    if (!tel) {
        return
    }

    nomeAluno.push(aluno)
    endereco.push(end)
    nomeMae.push(mae)
    nomePai.push(pai)
    telefone.push(tel)

    formulario.reset()

}

function validaCampoString(campo) {
    console.log(campo.placeholder);
    if (campo.value != "" && campo.value != " ") {
        return campo.value
    } else {
        alert(`O campo "${campo.placeholder}" é de preenchimento obrigatório!`)
        campo.focus()
        return null
    }
}

function carregarDataList(campoDataList, lista) {
    lista.forEach((element, index) => {
        let option = document.createElement("option")
        option.value = element
        option.id = index
        campoDataList.appendChild(option)
    });
}

var idBtSalvarNota = document.getElementById("idBtSalvarNota")

idBtSalvarNota.onclick = function() {
    let aluno = document.getElementById("idAlunoNotas")
    console.log(aluno.options);
}
