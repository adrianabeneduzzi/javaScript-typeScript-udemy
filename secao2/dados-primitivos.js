// String, numer, undefined, null, boolean, symbol
const nome = 'Adriana'; // string
const nome1 = "Adriana";// string
const nome2 = `Adriana`;// string
const num1 = 10; // number
const num2 = 10.52; //number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof nome, nome);
console.log(typeof num1, num1);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);


const a = [1,2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

let c = 2;
const d = c;
console.log(c, d);

c = 3;
console.log(c, d);