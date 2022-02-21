//  Lesson-13 NaN

/* 
    Некоторые операции с бесконечностями приводят к странному результату, например, деление бесконечности на бесконечность. 
    В математике такая операция не имеет никакого числового эквивалента. В JavaScript вернется NaN.

    Infinity / Infinity; // NaN

    NaN - специальное значение "не число", которое обычно говорит о том, что была выполнена бессмысленная операция. 
    Результатом любой операции, в которой участвует NaN, будет NaN.

    NaN + 1; // NaN

    NaN интересное значение, хотя оно обозначает "не число" — с точки зрения типов, оно является числом. 
    Парадокс. NaN никогда не является желаемым значением и появляется только в результате ошибок. 
    Если вы его встретили, то нужно отследить момент, в котором выполнилась операция, недопустимая для чисел, и поправить это место.
*/

//  Задание - Выполните операцию, которая приводит к NaN, и распечатайте её результат на экран с помощью console.log()

console.log(Infinity / Infinity);