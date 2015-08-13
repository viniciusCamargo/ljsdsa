// /////////////////// Cria sequencia Fibonacci
// var a = [1, 1];
// var x = 10;

// for (var i = 2; i < x; i++) {
// 	a[i] = a[i - 1] + a[i - 2];
// }
// console.log(a); // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

// /////////////////// Inclui no início do array
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (var i = n.length; i > 0; i--) {
// 	n[i] = n[i -1];
// }
// n[0] = 23;
// console.log(n); // [ 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // ou
// n.unshift(21, 22);
// console.log(n); // [ 21, 22, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// /////////////////// Inclui no final do array
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// n.push(10);
// console.log(n); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// /////////////////// Exclui ultimo elemento do array
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// n.pop();

// console.log(n); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

// /////////////////// Exclui primeiro elemento do array
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (var i = 0; i < n.length; i++) {
// 	n[i] = n[i + 1];
// }
// console.log(n); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined ]

// // ou (forma correta)
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// n.shift();

// console.log(n); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// /////////////////// Inclui/Exclui elementos no meio do array
// var n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// n.splice(3, 2);
// console.log(n); // [ 0, 1, 2, 5, 6, 7, 8, 9 ]

// n.splice(3, 0, 40, 41);
// console.log(n); // [ 0, 1, 2, 40, 41, 3, 4, 5, 6, 7, 8, 9 ]

// n.splice(3, 3, 24, 25, 26);
// console.log(n); // [ 0, 1, 2, 24, 25, 26, 6, 7, 8, 9 ]

// /////////////////// pop(), push(), shift(), unshift(), splice()
// pop()      exclui ultimo elemento do array
// push()     inclui no final do array
// shift()    exclui primeiro elemento do array
// unshift()  inclui no inicio do array
// splice()		inclui e/ou exclui elementos em qualquer posiçao do array
//						Ex.:
//						splice(3, 2) exclui dois elementos a partir da 3ª
//						posiçao incluindo ele mesmo. Ou:
//						splice(3, 0, 1, 2, 3) inclui elementos 1, 2 e 3 a partir
//						da 3ª posiçao. Ou:
//						splice(3, 2, x, y) substitui dois elementos a partir 3ª
//						posiçao, incluindo ele mesmo, por x e y

// // Challenge: escrever um algoritmo que popule uma matriz de dias e temperaturas medias
// // por hora
// var diasMes = 31;
// var horasDia = 24;
// var temperaturaMedia = [];

// for (var i = 0; i < diasMes; i++) {
// 	temperaturaMedia[i] = [];
// 	for (var j = 0; j < horasDia; j++) {
// 		temperaturaMedia[i][j] = Math.floor(Math.random() * (29 - 12)) + 12; // retorna um numero inteiro entre 12 e 28
// 	}
// }

// /////////////////// Cria uma matriz de X por X
// var m = [];
// for (var i = 0; i < 3; i++) {
// 	m[i] = [];
// 	for (var j = 0; j < 3; j++) {
// 		m[i][j] = [];
// 		for (var z = 0; z < 3; z++) {
// 			m[i][j][z] = i + j + z;
// 		}
// 	}
// }
// /////////////////// Imprime todos os valores da matriz
// for (var i = 0; i < m.length; i++) {
// 	for (var j = 0; j < m[i].length; j++) {
// 		for (var z = 0; z < m[i][j].length; z++) {
// 			console.log(m[i][j][z]);
// 		}
// 	}
// }

// /////////////////// Concatena varias arrays
// var zero = 0;
// var nPositivos = [1, 2, 3];
// var nNegativos = [-3, -2, -1];
// var n = nNegativos.concat(zero, nPositivos);

// console.log(n); // [ -3, -2, -1, 0, 1, 2, 3 ]

// /////////////////// Metodos de arrays
var ehPar = function(x) {
	console.log(x);
	return (x % 2 == 0);
}

var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// n.every(ehPar); // 1
// // o every() para a execuçao no primeiro 'false' que encontra

// n.some(ehPar); // 1, 2
// // .some() tem o mesmo comportamento que o every(), mas para no
// // primeiro true

// n.forEach(function(x) {
// 	console.log(x, x % 2 == 0);
// });
// // forEach() passa em todos os elementos do array, independente
// // das condiçoes

// var myMap = n.map(ehPar);
// // map() guarda o resultado da funcao ehPar() no myMap, porem ele
// // itera e salva todos os elementos de n, logo o novo array tera o
// // mesmo tamanho que o array original
// console.log(myMap);  // [false, true, false, true, false, true, ...]

// var numerosPares = n.filter(ehPar);
// // filter(), ao contrario de map(), so adiciona no novo arary os
// // elementos que validarem true na funcao ehPar
// console.log(numerosPares); // [2, 4, 6, 8, 10, 12, 14]

// var somaN = n.reduce(function(previous, current, index) {
// 	return previous + current;
// });
// console.log(somaN); // 120

// pg 101
