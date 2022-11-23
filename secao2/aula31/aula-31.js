// Bloco de código de executam uma ação
// Recebe valor, podem ou não retornar um valor
// Não é interessante criar uma função que executa várias ações

/*function pratica(nome) {
    //console.log(`${nome} É sobre ser 1% melhor todo o dia!`);
    return `${nome} É sobre ser 1% melhor todo o dia!`;
    
}

//pratica('Adriana');
//pratica('Você');
const variavel = pratica('Adriana');
console.log(variavel); */

/*function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
    console.log('Teste');
}

console.log(soma(2,2));
console.log(soma(5,7));
console.log(soma(5,10));
//console.log(resultado);

console.log(soma(2,2));

//const resultado = soma(5, 10);
//const resultado = soma('Adriana', ' Beneduzzi');
//const resultado = soma();
const resultado = soma(4, 2); //assume o valor
console.log(resultado);

//const resultado = soma(2,2);
//console.log(resultado); */

// Função anônima

/*const raiz = function (n) {
    return n ** 0.5;
}; // é necessário o uso de ponto e vírgula

console.log(raiz(9));
console.log(raiz(81));
console.log(raiz(25)); */

// arrow function -> simplificar a função

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(81));
console.log(raiz(25));