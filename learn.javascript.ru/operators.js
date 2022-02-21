//Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;

// let c = ++a; // 2, префиксная форма возвращает новое значение
// let d = b++; // 1, постфиксная форма возвращает старое значение

// console.log(a, b, c, d)

//  Чему будут равны переменные z и x после исполнения кода в примере ниже?

let z = 2;
let x = 1 + (z *= 2);

console.log(z, x)  // 4 & 5

//  Какой результат будет у выражений ниже?

console.log("" + 1 + 0)     //  10
console.log("" - 1 + 0)     //  -1
console.log(true + false)   //  1
console.log(6 / "3")        //  2
console.log("2" * "3")      //  6
console.log(4 + 5 + "px")   //  9px
console.log("$" + 4 + 5)    //  $45
console.log("4" - 2)        //  2
console.log("4px" - 2)      //  NaN
console.log(7 / 0)          //  Infinity
console.log("  -9  " + 5)   //  -9  5
console.log("  -9  " - 5)   //  -14
console.log(null + 1)       //  1
console.log(undefined + 1)  //  NaN
console.log(" \t \n" - 2)   // -2

//  В чём ошибка? Исправьте её. Результат должен быть 3

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// console.log(a + b); // 12

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

console.log(+a + +b); // 3
