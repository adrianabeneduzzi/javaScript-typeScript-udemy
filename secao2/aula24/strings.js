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
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g)); //expressão regular
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace('Um', 'Outra')); //substituir texto
console.log(umaString.replace(/Um/, 'Outra'));

let outraString = "O rato roeu a roupa do rei de roma."
console.log(outraString.replace(/r/, '#'));
console.log(outraString.replace(/r/g, '#'));
console.log(outraString.length);
console.log(outraString.slice(2, 5));
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-3));
console.log(outraString.slice(-5));
console.log(outraString.slice(-5, outraString.length -1));
console.log(outraString.slice(-5, -1));
console.log(outraString.substring(outraString.length -5));
console.log(outraString.substring(outraString.length -5, outraString.length -1));
console.log(outraString.split(' '));
console.log(outraString.split('r'));
console.log(outraString.split(' ', 2));
console.log(outraString.split(' ', 3));
console.log(outraString.split(' ', 3));
console.log(outraString.toUpperCase());
console.log(outraString.toLocaleLowerCase());