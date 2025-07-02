/*se os campo de nome && campo de email estiver preenchido envie os dados
    envie os dados
senão 
    peça a usuária que preencha os campos nome e email*/



/*if (document.getElementById("nome").value estiver preenchido && document.getElementById("email").value estiver preenchido) {
    envie os dados
} else {
    peça a usuária que preencha os campos nome e email
}*/



/*if (document.getElementById("nome").value diferente de "" && document.getElementById("email").value diferente de "") {
    envie os dados
} else {
    peça a usuária que preencha os campos nome e email
}*/

/*dequemviráoevento.addEventListener("evento", oquedevefazer)

if (document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
    alert("Prontinho! Você receberá as novidades por e-mail")
} else {
    alert("Por favor, preencha os campos nome e e-mail!")
}*/

/*document.getElementById("botaoEnviar").addEventListener("click", oquedevefazer)

if (document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
    alert("Prontinho! Você receberá as novidades por e-mail")
} else {
    alert("Por favor, preencha os campos nome e e-mail!")
}*/


/*document.getElementById("botaoEnviar").addEventListener("click", oquedevefazer)

function nomeDaFuncao() {
    //codigo que deve ser executado 
}

if (document.getElementById("nome").value != "" && document.getElementById("email").value != "") {
    alert("Prontinho! Você receberá as novidades por e-mail")
} else {
    alert("Por favor, preencha os campos nome e e-mail!")
}*/


document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != ""
        && document.getElementById("telefone") != "") {
        alert("Prontinho! Você receberá as novidades por e-mail")

    } else {
        alert("Por favor, preencha os campos nome, e-mail e telefone!")
    }
}

