let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

//console.log(varA, varB, varC);

/*exemplo 1

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

*/

//exemplo2

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);