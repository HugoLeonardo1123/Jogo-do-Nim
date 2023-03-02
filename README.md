# Jogo-do-Nim

### Este é um jogo Nim simples, desenvolvido em HTML, CSS, JavaScript e DOM.

## Sumário
[1.0 Descrição](#1-descri%C3%A7%C3%A3o)


   [1. O que a aplicação faz](#11-o-que-a-aplica%C3%A7%C3%A3o-faz)

   [1.2. Como executar](#12-como-executar)

   [1.3. Tecnologias utilizadas](#13-tecnologias-utilizadas)

   [1.4. Funcionamento do código](#14-funcionamento-do-c%C3%B3digo)

   [1.5. Desafios encontrados](#15-desafios-encontrados)

[2. Link para a página do jogo](#2-link-para-a-p%C3%A1gina-do-jogo) 

[3. Regras do jogo](#3-regras-do-jogo)

[4. Como jogar](#4-como-jogar)

[5. Créditos](#5-cr%C3%A9ditos) 

[5. Licença do projeto](#6-licen%C3%A7a-do-projeto)

## 1. Descrição

<p> O jogo Nim é um jogo matemático de dois jogadores que envolve remover objetos de pilhas. O jogo começa com várias pilhas de objetos, como pedras, palitos ou moedas. Os jogadores alternam turnos para remover um número qualquer de objetos de uma única pilha. O jogador que remove o último objeto das pilhas vence o jogo.</p>

<p>Existem muitas variações do jogo Nim, incluindo o jogo Nim padrão, onde há várias pilhas e o jogador que remove o último objeto vence; e o jogo Misère Nim, onde o jogador que remove o último objeto perde. O jogo Nim é um jogo clássico de estratégia, pois os jogadores devem decidir qual pilha remover objetos e quantos objetos remover, com o objetivo de deixar o oponente com a última jogada desfavorável. O jogo tem aplicações em ciência da computação, teoria dos jogos e outras áreas da matemática.</p>
 
## 1.1. O que a aplicação faz

<p>
O código acima é uma implementação em JavaScript de um jogo chamado Nim, que envolve a remoção de palitos de pilhas. A página HTML inclui elementos de interface do usuário para o jogo, como uma seção de tabuleiro com pilhas de palitos, um menu suspenso para selecionar a pilha de onde se deseja remover palitos, um campo de entrada numérica para especificar quantos palitos deseja-se remover e botões para jogar e iniciar um novo jogo.
</p>
<p>
O código JavaScript começa selecionando os elementos HTML relevantes usando seus IDs e classes, e define variáveis de jogo, como o jogador atual e se há um vencedor. Em seguida, adiciona um evento de clique ao botão "Jogar" que chama a função "jogar". Essa função recebe os valores selecionados pelo usuário no menu suspenso e no campo de entrada, verifica se a pilha selecionada tem palitos suficientes para serem removidos, remove os palitos da pilha selecionada, verifica se o jogo acabou e alterna o jogador atual.
</p>
<p>
Também existe uma função "novoJogo" que é chamada quando o botão "Novo Jogo" é clicado. Essa função redefine as variáveis de jogo, remove todos os palitos do tabuleiro e altera a mensagem do jogador para "Jogador 1".
No geral, o código é uma implementação simples do jogo Nim.
</p>



## 1.2 Como executar

<p>Basta abrir o arquivo index.html em seu navegador para iniciar o jogo.</p>


## 1.3 Tecnologias utilizadas

+ HTML
+ CSS
+ Javascript
+ DOM

## 1.4 Funcionamento do código

<p>
O código é dividido em duas partes principais: HTML e  JavaScript.

</p>
<h4>HTML</h4>
<p>
O HTML contém a estrutura básica da página e os elementos necessários para a exibição do jogo.
</p>
<h4>JavaScript</h4>
<p>
O JavaScript é responsável por controlar o jogo e lidar com as interações do usuário.
</p>
<h3>As principais funções do jogo são:</h3>
<p>
removerPalitos(): remove um determinado número de palitos de uma pilha.

verificarVencedor(): verifica se o jogo acabou e se há um vencedor.

alternarJogador(): alterna o jogador atual.

jogar(): lida com o clique no botão "Jogar".

novoJogo(): reinicializa o jogo.

O jogo começa com o jogador 1 e alterna entre os jogadores a cada jogada. O jogo termina quando não houver mais palitos no tabuleiro. O jogador que remover o último palito da última pilha perde.
</p>


 ## 1.5 Desafios encontrados
 
+ Dificuldade em alternar entre os jogadores;
+ Dificuldade de implementar a função para  verificar se o jogo havia acabado ou não;
+ Dificuldade em implementar uma função para remover a quantidade de palitos escolhidos pelo jogador.


## 2. Link para a página do jogo

https://silly-florentine-3bef61.netlify.app/



## 3. Regras do jogo
<p> O jogo Nim é um jogo matemático em que dois jogadores retiram objetos de pilhas, com o objetivo de deixar a última pilha vazia. </p>

<p> As regras básicas do jogo são:</p>

+ O jogo é jogado com pelo menos uma pilha de objetos, e cada pilha contém um número diferente de objetos.
+ Na sua vez, um jogador deve escolher uma pilha e retirar pelo menos um objeto dela. O jogador pode retirar objetos de apenas uma pilha em cada jogada.
+ O jogador que retirar o último objeto da última pilha é o vencedor. 
+ Se não houver mais objetos em todas as pilhas e ainda não houver um vencedor, o jogo termina em empate.




## 4. Como jogar
<p>O objetivo do jogo é evitar que o outro jogador remova o último palito da última pilha.</p>

1. Na sua vez, escolha uma pilha e o número de palitos que deseja remover.

2. Clique no botão "Jogar" para remover os palitos da pilha selecionada.

3. O próximo jogador faz a mesma coisa.
4. O jogo termina quando não houver mais palitos no tabuleiro.
5. O jogador que remover o último palito da última pilha perde.


## 5. Créditos
https://www.devmedia.com.br/guia/javascript/34372

https://www.w3schools.com/js/default.asp

https://youtu.be/HOv9CqqAZk0

https://www.javascripttutorial.net/javascript-dom/

## 6. Licença do projeto
Licença MIT






