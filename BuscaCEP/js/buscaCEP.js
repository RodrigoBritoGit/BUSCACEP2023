async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro')

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        var consultaCEPConvertida = await consultaCEP.json()
        
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro')
        var numero = document.getElementById('numero')

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;
        numero.value = consultaCEPConvertida.ddd;

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    }
    catch(erro) {
        mensagemErro.innerHTML = `<p class="mensagemErro">Cep Inválido. Tente novamente</p>`
        console.log(erro)
    }
    
}

const cep1 = document.getElementById('enviar')
cep1.addEventListener("click", () => buscaEndereco(cep.value)); 

function NovaBusca() {
    document.location.reload(true)
    console.log("Estou na função novaBusca")
}

const novaBusca = document.getElementById('novaBusca')
novaBusca.addEventListener("click", () => NovaBusca());


   