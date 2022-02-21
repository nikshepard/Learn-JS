//  Lesson-14 Linter

/* 
    Код программы следует оформлять определенным образом, чтобы он был достаточно понятным и простым в поддержке. 
    Специальные наборы правил — стандарты — описывают различные аспекты написания кода. Конкретно в JavaScript самым распространенным стандартом является стандарт от AirBnb.
    В любом языке программирования существуют утилиты — так называемые линтеры. Они проверяют код на соответствие стандартам. В JavaScript это eslint.
    Взгляните на пример из предыдущего урока:

    console.log(8/2+5 - -3 / 2); // 10.5

    Линтер будет «ругаться» на нарушение сразу нескольких правил:
    space-infix-ops – Отсутствие пробелов между оператором и операндами.
    no-mixed-operators – По стандарту нельзя писать код, в котором разные операции используются в одном выражении без явного разделения скобками.
    В прошлом уроке мы сами признали, что такое обилие цифр и символов запутывает, и решили добавить скобки исключительно для удобства чтения:

    console.log(((8 / 2) + 5) - (-3 / 2)); // 10.5

    Этот вариант уже не нарушает правил, и линтер будет «молчать».
    В упражнении прошлого урока у вас скорее всего получилось так:

    console.log(70 * (3 + 4) / (8 + 2));

    Есть ли здесь нарушение стандарта?
    К сожалению, да. На этот раз операции * и / находятся в одном выражении без разделения скобками. Вы можете решить эту проблему, добавив дополнительные скобки. 
    Но в какой-то момент количество скобок может быть уже настолько большим, что код снова станет неудобным и непонятным. 
    В этот момент разумнее будет разделить выражение на отдельные части. Мы научимся это делать в следующих уроках. no-mixed-operators — лишь одно из большого количества правил. 
    Другие правила описывают отступы, названия создаваемых сущностей, скобки, математические операции, длину строк и множество иных аспектов. 
    Каждое отдельное правило кажется довольно мелким, не очень важным. Но вместе они составляют основу хорошего кода.
*/

//  Задание - Выведите результат вычисления, расставив скобки так, чтобы не нарушать правило no-mixed-operators:
//  «разница между пятью в квадрате и произведением трёх и семи».

console.log((5 ** 2) - (3 * 7));
