function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //ele pega o documento pelo id do html, mas com o value pega só o valor numérico.(o valor que a pessoa digitou)//
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value); // parseint vai forçar com que o que seja digitado seja apenas número inteiro.

    let sorteados = [];
    let numero;

    if(de >= ate) {
        alert("Erro! O campo 'Do número' deve ser inferior ao campo 'Até o número'. Verifique imediatamente! ");
        return;
    }
    if( quantidade >(ate - de + 1)) { //solução para loop. Antes disso, caso o jogador colocasse os seguintes números/ ou equivalentes, entraria em loop. EX: Quantidade: 5 Do: 10 Até:13 
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return; 
    }

    for (let i = 0; i < quantidade; i++) { //repete um bloco de código enquanto uma condição for verdadeira
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)) { //enquanto variavel sorteados incluir esse numero, ele vai repetir o processo.
            numero = obterNumeroAleatorio(de, ate)
            alert('Tentando obter número inédito');
        }
        sorteados.push(numero); //coloca os numeros sorteados dentro do array EX: min = 1, max = 5 Array = 1,2,3,4,5

    }

    let resultado = document.getElementById('resultado'); //pega o id, assim como antes
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>` //innerHTMl insere algo no HTML selecionado, + crase na linha do HTMl que deseja alterar com a variável.
    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max) { //gerar numero aleatorio entre min e max
    return Math.floor(Math.random() * (max - min + 1)) + min; //Gerando um número inteiro aleatório entre dois valores, inclusive o max e min
}

function alterarStatusBotao(){ //vai alterar a classe do botão/alterar seu status, de desativado para ativado.
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')) { // se o botão contiver classe tal realizar x ações
        botaoReiniciar.classList.remove('container__botao-desabilitado'); //remove a classe/status atual
        botaoReiniciar.classList.add('container__botao'); //adiciona nova classe/status
    } else {
        botaoReiniciar.classList.remove('container__botao'); 
        botaoReiniciar.classList.add('container__botao-desabilitado'); 
    }

}

function reiniciar(){ //função reiniciar já existia no HTML, aqui só está atribuindo o que ela faz.
    document.getElementById('quantidade').value = ''; //todos os document abaixo reseta o espaço digitável no HTML
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'; //reseta o resultado para sua mensagem original.
    alterarStatusBotao(); //reseta o botão reiniciar para seu status desabilitado
    
}

