//Não podemos criar constantes com palavras reservadas
//Contantes precisam ter nomes significativos
//Não começar o nome de uma constante com um numero 
//Não podem conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar o valor de uma constante
//Não use VAR, use CONST

const nome = 'Adriana';
console.log(nome);
//nome = 'Agora'

// + - * /
//String = Texto | Number = Número
const primeiroNumero = 5; //Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
console.log(primeiroNumero);

console.log(typeof primeiroNumero);
console.log(typeof(primeiroNumero + segundoNumero));