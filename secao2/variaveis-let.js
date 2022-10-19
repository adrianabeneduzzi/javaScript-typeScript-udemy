//Podemos criar uma variável eu não utilizar a variável
let nome2; //Declarou a variável
nome2 = 'Adriana' // Inicializando a variável
console.log(nome2);
nome2 = 'Aparecida';
console.log(nome2);

/*
    Não podemos criar variáveis com palavras reservadas
    - let if = 'Não';
*/

//Variáveis precisam ter nomes significativos
let n = 'Gabriela';
console.log(n);

let nomeCliente1 = 'Victória';
console.log(nomeCliente1);

/*
    Não começar o nome de uma variável com um numero 
    - let 1nome;
*/

/* 
    Não podem conter espaços ou traços
    - let nome-cliente;
*/

//Utilizamos camelCase
let nomeCompletoDoCliente = 'Adriana Aparecida';

//Case-sensitive
let nomeCliente = 'Adriana'
let nomecliente = 'Adriano'
console.log(nomeCliente, nomecliente)

//Não podemos redeclarar variáveis com let
//Não use VAR, use LET