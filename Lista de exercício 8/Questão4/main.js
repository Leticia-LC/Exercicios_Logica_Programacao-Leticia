const salarioMinimo = 1212.00
var funcionarios = []
var btCadastrar
var btRelatorio
var saida


inicializar()

btCadastrar.onclick = function(){
    let isTelaValida = consistirTela()
    if (isTelaValida) {
        cadastrar()
        limparTela()
    }
}

btRelatorio.onclick = function(){
     
    let funcionariosFiltrados = funcionarios.filter(funcionario => {
        return (funcionario.sexo == "F" && funcionario.salario > 5000)
    })
 
    saida.value = "Mulheres com salários acima de R$5K: "
    funcionariosFiltrados.forEach(funcionario => {
        saida.innerText = saida.value + "("+ funcionario.nome + "; " + funcionario.sexo + "; "+ funcionario.salario +")\n"
    });
}

function inicializar() {
    btCadastrar = document.getElementById("idBtCadastrar")
    btRelatorio = document.getElementById("idBtRelatorio")
    saida = document.getElementById("idOut")
    limparTela()
}

function consistirTela() {
    let nome = document.getElementById("idNome").value
    let salario = document.getElementById("idSalario").value

    if (nome == "" || nome == " ") {
        saida.value = "Campo Nome, preenchimento obrigatório"
        saida.classList.add("alerta")
        document.getElementById("idNome").focus()
        return false
    } 

    if (salario == "" || salario == " ") {
        saida.value = "Campo Salario, preenchimento obrigatório"
        saida.classList.add("alerta")
        document.getElementById("idSalario").focus()
        return false
    }

    if (Number(salario) < salarioMinimo) {
        saida.value = "Salario abaixo do salário mínimo"
        saida.classList.add("alerta")
        document.getElementById("idSalario").focus()
        return false
    }

    saida.classList.remove("alerta")
    return true 
 }

function limparTela() {
    document.getElementById("idNome").value = ""
    document.getElementById("idSalario").value = ""
    document.getElementById("idFem").checked = true
}

function cadastrar() {
    let formulario = document.getElementById("idForm")
    let funcionario = {
        nome: formulario.nmNome.value, 
        sexo: formulario.nmGenero.value,
        salario: Number(formulario.nmSalario.value)
    }
    funcionarios.push(funcionario)
    saida.value = "Cadastro Realizado com sucesso!"
    console.log(funcionarios);
}