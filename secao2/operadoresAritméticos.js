/*
    Aritméticos
    + Adição / Concatenação
    - / *
    ** Potenciação
    % Resto da Divisão

    Precedência
    - ()
    - **
    - * / %
    -  + -
    
    Incremento 
        ++
    Decremento
        --
*/


const num1 = 5;
const num2 = 2;
const num5 = 10;
console.log(num1 + num2); // Adição
console.log(num1 / num2); // Divisão
console.log(num1 - num2); // Subtração
console.log(num1 + num2 * num5); //Por precedência
console.log((num1 + num2) * num5); //Alterado precedência

//Concatenação
const num3 = '5';
const num4 = 10;
console.log(num3 + num4);

// Potenciação **
const num9 = 2;
const num10 = 10;
console.log(num9 ** num10);

// Resto da divisão
const num11 = 10;
const num12 = 3;
console.log(num11 % num12);

let contador = 1;
contador ++; //2
contador ++; //3
contador ++; //4
console.log(contador);

let contador1 = 1;
++contador1;
console.log(contador1);

let contador2 = 1;
console.log(contador2++);
console.log(contador2);

let contador3 = 1;
console.log(++contador3);
console.log(contador3);

let contador4 = 10;
console.log(--contador4);
console.log(--contador4);

//Não é uma boa prática
let contador5 = 1;
console.log(contador5++);

//Mais de um incremento exemplo 1
let contador6 = 1;
contador6 = contador6 + 2;
console.log(contador6);

//Mais de um incremento exemplo 2
const passo = 2;
let contador7 = 0;
contador7 = contador7 + passo;
console.log(contador7);
contador7 = contador7 + passo;
console.log(contador7);
contador7 = contador7 + passo;
console.log(contador7);

//Mais de um incremento exemplo 3
let contador8 = 0;
contador8 += 2;
contador8 += 2;
contador8 += 2;
console.log(contador8);

//Incremento com multiplicação
let contador9 = 2;
contador9 *= 2;
contador9 *= 2;
contador9 *= 2;
contador9 *= 2;
console.log(contador9);

//Incremento com potenciação
let contador10 = 2;
contador10 **= 10;
console.log(contador10);

//NAN - Not a number
const num14 = 10;
const num15 = 'Adriana';
console.log(num14 * num15);

//Conversão de string para number int 1
const num16 = 10;
const num17 = parseInt('5');
console.log(num16 + num17);
console.log(typeof num17);

//Conversão de string para number float
const num18 = 10;
const num19 = parseFloat('5.2');
console.log(num18 + num19);
console.log(typeof num19);

//Conversão de string para number int 2
const num20 = 10;
const num21 = Number('5.2');
console.log(num20 + num21);
console.log(typeof num21);