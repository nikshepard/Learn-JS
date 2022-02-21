//  Lesson-17 Concatenation

/* 
    В веб-разработке программы постоянно оперируют строками. Всё, что мы видим на сайтах, так или иначе представлено в виде текста. 
    Этот текст чаще всего динамический, то есть полученный из разных частей, которые соединяются вместе. Операция соединения строк в программировании называется конкатенацией.
    Оператор такой же, как и при сложении чисел, но здесь он имеет другой смысл (семантику):

    console.log('Dragon' + 'stone'); // 'Dragonstone'

    Склеивание строк всегда происходит в том же порядке, в котором записаны операнды. Левый операнд становится левой частью строки, а правый — правой.
    Вот еще несколько примеров:

    console.log('Kings' + 'wood');      // Kingswood
    console.log('road' + 'Kings');      // roadKings
    console.log("King's" + 'Landing');  // King'sLanding

    Как видите, строки можно склеивать, даже если они записаны с разными кавычками.
    В последнем примере название города получилось с ошибкой: King's Landing нужно писать через пробел. 
    Но в наших начальных строках не было пробелов, а пробелы в самом коде слева и справа от символа + не имеют значения, потому что они не являются частью строк.
    Выхода из этой ситуации два и оба способа равнозначны - пробел в левой или в правой части:

    console.log("King's " + 'Landing'); // King's Landing
    console.log("King's" + ' Landing'); // King's Landing

    Пробел — такой же символ, как и другие. Чем больше пробелов, тем шире отступы:

    console.log("King's " + ' Landing');   // King's  Landing
    console.log("King's  " + '  Landing'); // King's    Landing
*/

//  Задание - Выведите на экран:
//  Winter came for the House of Frey.

console.log('Winter ' + 'came ' + 'for ' + 'the ' + 'House ' + 'of ' + 'Frey.');