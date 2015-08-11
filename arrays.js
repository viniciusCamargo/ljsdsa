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

// Challenge: escrever um algoritmo que preencha uma matriz de dias e temperaturas medias
// por hora
// var diasMes = 31;
// var horasDia = 24;
// var temperaturaMedia = [];

// for (var i = 0; i < diasMes; i++) {
// 	temperaturaMedia[i] = [];
// 	for (var j = 0; j < horasDia; j++) {
// 		temperaturaMedia[i][j] = Math.floor(Math.random() * (29 - 12)) + 12; // retorna um numero inteiro entre 12 e 28
// 	}
// }

// pg 94
