/*
const array = [1,2,3];
array.push(4);
array[0] = 'Adriana';
array = 'Teste'; // com const não é permitido
console.log(array); 
*/

/*let array = [1,2,3];
array.push(4);
array[0] = 'Adriana';
array = 'Teste'; //com let é possível 
console.log(array);
*/

/*
const nome01 = 'Adriana';
const sobrenome01 = 'Beneduzzi';
const idade01 = 33;

const nome02 = 'Victória';
const sobrenome02 = 'Beneduzzi';
const idade02 = 10;
*/

/* 
//Ainda assim o código ficará extenso
const pessoa1 = {
    nome:'Adriana',
    sobrenome: 'Beneduzzi',
    idade: 33
};

const pessoa2 = {
    nome:'Victória',
    sobrenome: 'Beneduzzi',
    idade: 10
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

//(nome,sobrenome, idade) são parâmetros
/*
function criaPessoa (nome,sobrenome, idade) { 
    return{nome, sobrenome,idade};
}

const pessoa1 = criaPessoa('Adriana', 'Beneduzzi', 33); //argumentos
const pessoa2 = criaPessoa('Victória','Beneduzzi',10);
const pessoa3 = criaPessoa('Almir', 'Martins', 40);
const pessoa4 = criaPessoa('Gabriela', 'Beneduzzi', 4);
const pessoa5 = criaPessoa('Thor', 'Beneduzzi', 3);
console.log(pessoa1.nome, pessoa2.nome, pessoa4.nome);
*/

const pessoa1 = {
    nome: 'Analu',
    sobrenome: 'Radaelli',
    idade: 29,

    fala() {
        //console.log('Mais 1%!!!');
        //console.log(`${this.nome} ${this.sobrenome} está com saudades! `);
        console.log(`A minha idade atual é ${this.idade}`);
    },

        incrementaIdade() {
            this.idade++;
        }
    } ;   


pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
