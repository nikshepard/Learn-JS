//  Lesson-19 Expressions in definitions

/* 
    Переменные полезны не только для хранения и переиспользования информации, но и для упрощения сложных вычислений. 
    Давайте рассмотрим пример: нужно перевести евро в рубли через доллары. Подобные конвертации через промежуточную валюту часто делают банки при покупках за рубежом.
    Для начала переведем 50 евро в доллары. Допустим, что один евро — 1.25 долларов:

    let dollarsCount = 50 * 1.25;
    console.log(dollarsCount); // => 62.5

    В предыдущем уроке мы записывали в переменную конкретное значение. А здесь let dollarsCount = 50 * 1.25; справа от знака равно находится выражение. 
    Интерпретатор вычислит результат — 62.5 — и запишет его в переменную. 
    С точки зрения интерпретатора не важно, что перед ним: 62.5 или 50 * 1.25, для него оба варианта — выражения, которые надо вычислить. И они вычисляются в одно и тоже значение — 62.5.

    Любая строка — выражение. Конкатенация строк — тоже выражение. Когда интерпретатор видит выражение, он обрабатывает его и генерирует результат — значение выражения. 
    Вот несколько примеров выражений, а в комментариях справа от каждого выражения — итоговое значение:

    62.5             // 62.5
    50 * 1.25        // 62.5
    120 / 10 * 2     // 24
    'hello'          // "hello"
    'Good' + 'will'  // "Goodwill"

    Грамматика языка такова, что в тех местах, где ожидается выражение, можно поставить любое вычисление (не только математическое, но и строковое — как конкатенация)..
    В этом случае программа останется работоспособной. По этой причине невозможно описать и показать все случаи использования всех операций.
    Программы состоят из множества комбинаций выражений, и понимание этой концепции — один из ключевых шагов на вашем пути.

    Запишем стоимость доллара в рублях как отдельную переменную. Вычислим цену 50 евро в долларах, умножив их на 1.25. Допустим, что 1 доллар — 60 рублей:

    let rublesPerDollar = 60;
    let dollarsCount = 50 * 1.25; // 62.5
    let rublesCount = dollarsCount * rublesPerDollar; // 3750
    console.log(rublesCount);

    А теперь давайте добавим к выводу текст с помощью конкатенации:

    let rublesPerDollar = 60;
    let dollarsCount = 50 * 1.25; // 62.5
    let rublesCount = dollarsCount * rublesPerDollar; // 3750
    console.log('The price is ' + rublesCount + ' rubles'); // The price is 3750 rubles

    Любая переменная может быть частью любого выражения. В момент вычисления, вместо имени переменной подставляется её значение.
    Интерпретатор вычисляет значение dollarsCount до того, как эта переменная начнет использоваться в других выражениях. 
    Когда подходит момент использования переменной, Javascript «знает» значение, потому что уже вычислил его.
*/

//  Задание - Напишите программу, которая берет исходное количество евро, записанное в переменную eurosCount, переводит евро в доллары и выводит на экран. 
//  Затем полученное значение переводит в рубли и выводит на новой строчке. Считаем, что 1 евро = 1.25 долларов, 1 доллар = 60 рублей. 

let eurosCount = 100;
let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = eurosCount * dollarsPerEuro;
console.log(dollarsCount);
let rublesCount = dollarsCount * rublesPerDollar;
console.log(rublesCount);
