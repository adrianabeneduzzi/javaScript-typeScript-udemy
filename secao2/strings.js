//let umaString = "Um \"texto\""; //Barra invertida para escape
//let umaString = "Um \\texto"; //Para visualizar a barra invertida
//let umaString = 'Um "texto"'; // Para usar aspas duplas

let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString[8]);
console.log(umaString[-1]);
console.log(umaString.charAt(6));
console.log(umaString.charAt(8));
console.log(umaString.concat(' ', 'em', ' ', 'um'));
console.log(umaString.concat( ' em', ' um', ' lindo dia!'));
console.log(umaString.concat( ' em um lindo dia!'));
console.log(umaString + ' em um lindo dia!');
console.log(`${umaString} em um linda dia!`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('Um', 3));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o'));
