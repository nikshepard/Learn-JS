//  Lesson-10 Priority of operations

/* 
    Посмотрите внимательно на выражение 2 + 2 * 2 и посчитайте в уме ответ.

    Правильный ответ: 6.

    Если у вас получилось 8, то этот урок для вас. В школьной математике мы изучали понятие «приоритет операции». 
    Приоритет определяет то, в какой последовательности должны выполняться операции. 
    Например, умножение и деление имеют больший приоритет, чем сложение и вычитание, а приоритет возведения в степень выше всех остальных арифметических операций.
    2 ** 3 * 2  равно 16.

    Но нередко вычисления должны происходить в порядке, отличном от стандартного приоритета. 
    В сложных ситуациях приоритет можно (и нужно) задавать круглыми скобками, точно так же, как в школе, например: (2 + 2) * 2.
    Скобки можно ставить вокруг любой операции. Они могут вкладываться друг в друга сколько угодно раз. Вот пара примеров:

    console.log(3 ** (4 - 2)); // 9
    console.log(7 * 3 + (4 / 2) - (8 + (2 - 1))); // 14

    Иногда выражение сложно воспринимать визуально. Тогда можно расставить скобки, не повлияв на приоритет. 
    Например, задание из прошлого урока можно сделать немного понятнее, если расставить скобки.

    Было:
    console.log(8 / 2 + 5 - -3 / 2); // 10.5

    Стало:
    console.log(((8 / 2) + 5) - (-3 / 2)); // 10.5
*/

//  Задание - Расставьте скобки так, чтобы оба сложения высчитывались в первую очередь. Выведите результат на экран.
//  70 * 3 + 4 / 8 + 2.

console.log(70 * (3 + 4 )/ (8 + 2));