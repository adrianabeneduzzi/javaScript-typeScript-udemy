/*

Primitivos (imutáveis) - string, number, boolean, undefined, null(bingint, symbol)
    - Valores são copiados

*/

/*let nome = 'Aparecida';
nome = 'Adriana';
console.log(nome);

let nome1 = 'Aparecida';
nome[0] = 'M'
console.log(nome1[0],nome1);

let a = 'A';
let b= a; //cópia
console.log(a,b);

a = 'Teste';
console.log(a,b);

*/

/*

Referência (mutável) - array, object, funcion
    - Valores passado por referência para o mesmo valor na memória
*/

/*
let c = [1,2,3];
let d = [...c];
let e = d;
console.log(c,d);

c.push(4);
console.log(c,d);

d.pop();
console.log(e);

c.push('Adriana');
console.log(c,e);
*/

const f = {
    nome: 'Adriana',
    sobrenome: 'Beneduzzi'
};
const g = f;
//const g = {...f};//Para não alterar o valor

f.nome = 'Aparecida';
console.log(g);
console.log(f);