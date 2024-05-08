// // Задание 1
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// if (num1 <= num2) {
//     alert(`число ${num1} равно или меньше ${num2} число `);
// } else {
//     alert('error');
// }


// if (num2 >= 3) {
//     alert(`число ${num2} больше или равно 3`);
// } else {
//     alert('меньше');
// }

// // Задание 2
// let test = true;
// // if (test === true) {
// //     console.log('+++');
// // } else {
// //     console.log('---');
// // }
// console.log((test == true) ? '+++' : '---');

// Задание 3
// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
// const rndInt = randomIntFromInterval(1, 31)
// console.log(rndInt)

// let day = rndInt

// Задание 4
// if (day >= 0 && day <= 10) {
//     console.log('Это первая декада');
// }

// if (day >= 11 && day <= 20) {
//     console.log('Это вторая декада');
// }

// if (day >= 21 && day <= 32) {
//     console.log('Это третья декада');
// }

let n = prompt('Введите число');

if (n.length >= 3) {
    let m = String(n).slice(n.length - 3, n.length);
    alert("В числе " + n + " количество сотен: " + m[0] + ", десятков: " + m[1] + ", единиц: " + m[2]);
} else if (n.length == 2) {
    alert("В числе " + n + " количество сотен: 0, десятков: " + n[0] + ", единиц: " + n[1]);
} else if (n.length == 1) {
    alert("В числе " + n + " количество сотен: 0, десятков: 0, единиц: " + n);
} else {
    alert("Ошибка!");
}