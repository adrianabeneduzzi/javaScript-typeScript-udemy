/*
 luiz Otávio Mirando tem 30 anos, pesa 84 Kg
 tem 1.8 de altura e seu IMC é de 25.925925925925924
 Luiz Otávio nasceu em 1989
 */
const nome = 'Joana';
const sobrenome = 'Dark';
const idade = 33;
const peso = 84;
const alturaEmM = 1.80;
let indiceDeMassaCorporal; //peso / (altura * altura)
let anoNascimento;

indiceDeMassaCorporal = peso /(alturaEmM * alturaEmM);
console.log(indiceDeMassaCorporal);

anoNascimento = 2022 - idade;
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceDeMassaCorporal);
console.log(nome, 'nasceu em', anoNascimento,'.');

console.log(nome + ' ' + sobrenome, ' tem ' + idade +  ' anos, pesa', peso + 'Kg');
console.log('tem ' + alturaEmM + ' de altura e seu IMC é de ' + indiceDeMassaCorporal);
console.log(nome + ' nasceu em ' + anoNascimento +'.');

//template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceDeMassaCorporal}`);
console.log(`${nome}  nasceu em  ${anoNascimento}.`);