//  Lesson-19 What is a Variable

/* 
    Представьте себе задачу: нам нужно напечатать на экран фразу Father! два раза или даже пять раз. Эту задачу можно решить в лоб:

    console.log('Father!');
    console.log('Father!');
    В простейшем случае так и стоит поступить, но если фраза Father! начнет использоваться чаще, да еще и в разных частях программы, то придется ее везде повторять. 
    Проблемы с таким подходом начнутся тогда, когда понадобится изменить нашу фразу, а такое происходит довольно часто. 
    Нам придется найти все места, где использовалась фраза Father!, и выполнить необходимую замену. А можно поступить по-другому. 
    Вместо копирования нашего выражения достаточно создать переменную с этой фразой.

    let greeting = 'Father!';
    console.log(greeting); // => 'Father!'
    console.log(greeting); // => 'Father!'

    Переменная указывает на данные, которые были в неё записаны. Благодаря этому, данные можно использовать многократно без необходимости их постоянно дублировать. 
    Сама переменная создается и наполняется данными (инициализируется) с помощью инструкции let greeting = 'Father!'.
    Для имени переменной используется любой набор допустимых символов, к которым относятся буквы английского алфавита, цифры, а также знаки _ и $. 
    При этом цифру нельзя ставить в начале. Имена переменных регистрозависимы, то есть имя hello и имя heLLo - это два разных имени, а значит и две переменные. 
    Регистр в JavaScript имеет важное значение, никогда не забывайте про него.
    Переменную не обязательно инициализировать данными во время объявления. Иногда бывает нужно ее создать, а наполняться она будет потом:

    let greeting;
    console.log(greeting); // undefined

    Объявленная, но не инициализированная переменная, содержит внутри себя значение undefined. Это специальное значение, используемое тогда, когда ничего не определено.
    Для удобства анализа программы, переменные принято создавать как можно ближе к тому месту, где они используются.
    Количество создаваемых переменных ничем не ограничено, большие программы содержат десятки и сотни тысяч имен переменных:

    let greeting1 = 'Father!';
    console.log(greeting1);
    console.log(greeting1);

    let greeting2 = 'Mother!';
    console.log(greeting2);
    console.log(greeting2);
*/

//  Задание - Создайте переменную с именем motto и содержимым What Is Dead May Never Die!. Распечатайте содержимое переменной.

let motto = 'What Is Dead May Never Die!';
console.log(motto);
