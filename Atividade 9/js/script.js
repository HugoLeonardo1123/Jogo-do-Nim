
const tabuleiro = document.getElementById("tabuleiro");
const pilhas = document.querySelectorAll(".pilha");
const jogador = document.getElementById("jogador");
const pilhaSelect = document.getElementById("pilha");
const objetosInput = document.getElementById("objetos");
const jogarBtn = document.getElementById("jogar");

// Definindo as variáveis do jogo
let jogadorAtual = 1;
let vencedor = null;


jogarBtn.addEventListener("click", jogar);

// Função para remover palitos de uma pilha
function removerPalitos(pilha, numPalitos) {
  const palitos = pilha.querySelectorAll(".palito");
  for (let i = 0; i < numPalitos; i++) {
    palitos[i].remove();
  }
}


    // Função que verifica se o jogo acabou
function verificarVencedor() {
    let palitosRestantes = 0;
    for (let i = 0; i < pilhas.length; i++) {
      palitosRestantes += pilhas[i].querySelectorAll(".palito").length;
    }
    if (palitosRestantes === 0) {
      vencedor = jogadorAtual;
      jogador.textContent = `Jogador ${vencedor} venceu!`;
      jogarBtn.disabled = true;
    }
  }
  
  // Função para trocar o jogador atual
  function alternarJogador() {
    if (jogadorAtual === 1) {
      jogadorAtual = 2;
    } else {
      jogadorAtual = 1;
    }
    jogador.textContent = `Jogador ${jogadorAtual}`;
  }
  
  // Função para lidar com o clique no botão de jogar
  function jogar() {
    const pilhaSelecionada = parseInt(pilhaSelect.value);
    const numObjetos = parseInt(objetosInput.value);
    const pilha = pilhas[pilhaSelecionada - 1];
    if (pilha) {
      const palitosRestantes = pilha.querySelectorAll(".palito").length;
      if (numObjetos <= palitosRestantes) {
        removerPalitos(pilha, numObjetos);
        verificarVencedor();
        if (!vencedor) {
          alternarJogador();
        }
      }
    }
    pilhaSelect.selectedIndex = 0;
    objetosInput.value = "";
  }
  
  // Inicialize o jogo
  jogador.textContent = `Jogador ${jogadorAtual}`;
  

  // Selecione o botão "Novo Jogo"
const novoJogoBtn = document.getElementById("novo-jogo");

//evento de clique para o botão "Novo Jogo"
novoJogoBtn.addEventListener("click", novoJogo);

// Função para reiniciar o jogo
function novoJogo() {
  // Reinicialize as variáveis do jogo
  jogadorAtual = 1;
  vencedor = null;
  
  // Removendo todos os palitos do tabuleiro
  const palitos = document.querySelectorAll(".palito");
  for (let i = 0; i < palitos.length; i++) {
    palitos[i].remove();
  }
  
  // criar novo tabuleiro com o número padrão de palitos
  const numPalitos = 5;
  for (let i = 0; i < pilhas.length; i++) {
    for (let j = 0; j < numPalitos - i; j++) {
      const palito = document.createElement("div");
      palito.classList.add("palito");
      pilhas[i].appendChild(palito);
    }
  }
  
  // Ative o botão de jogar
  jogarBtn.disabled = false;
  
  // Atualize o jogador atual
  jogador.textContent = `Jogador ${jogadorAtual}`;
}


