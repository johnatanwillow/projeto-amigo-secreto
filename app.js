// Lista para armazenar os nomes dos participantes
let listaAmigos = []; // Criamos uma lista vazia para guardar os nomes dos participantes

// Função para exibir texto em uma tag específica na página
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);  // Seleciona um elemento HTML usando a tag informada (por exemplo, 'h1', 'p')
    campo.innerHTML = texto; // Altera o conteúdo do elemento para o texto passado como argumento
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.querySelector('input').value; // Captura o texto digitado no campo de input

    // Verifica se o nome está vazio ou contém apenas espaços em branco
    if (inputNome.trim() == "") {  
        exibirTextoNaTela("h1","Por favor, digite um nome válido!"); // Exibe uma mensagem de erro no <h1>
        return; // Encerra a função para evitar adicionar um nome inválido
    }

    listaAmigos.push(inputNome); // Adiciona o nome digitado à lista de amigos

    // Atualiza o conteúdo da página mostrando todos os nomes separados por vírgula
    exibirTextoNaTela('p', `Participantes: ${listaAmigos.join(', ')}`);

    limparCampo(); // Chama a função para limpar o campo de entrada após adicionar o nome
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há pelo menos dois amigos na lista
    if (listaAmigos.length < 2) {
        exibirTextoNaTela('h1', "Opa! Tá faltando amigos. Coloca pelo menos dois amigos aí, antes de a gente sortear!");
        return; // Encerra a função, pois não faz sentido sortear com menos de 2 pessoas
    }

    // Gera um número aleatório entre 0 e o tamanho da lista - 1 (para acessar um índice válido)
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

    // Usa o índice sorteado para pegar um nome da lista
    let amigoSecreto = listaAmigos[indiceSorteado]; 

    // Exibe o nome sorteado na tela dentro da tag <h1>
    exibirTextoNaTela('h1', `Seu amigo secreto é... Tcharam!:   ${amigoSecreto}`);
}

// Função para limpar o campo de entrada após adicionar um nome
function limparCampo() {
    let input = document.querySelector('input'); // Seleciona o campo de input
    input.value = ''; // Limpa o texto digitado no input, deixando-o vazio
}
