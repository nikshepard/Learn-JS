//  Lesson-19 Errors when working with variables

/* 
    Порядок следования инструкций в коде с переменными играет огромное значение. Переменная должна быть определена до того, как будет использована. 
    Ниже пример ошибки, которую очень часто допускают новички:

    console.log(greeting);
    let greeting = 'Father!'; // Uncaught ReferenceError: greeting is not defined

    Запуск завершается ошибкой ReferenceError: greeting is not defined. 
    ReferenceError - это ошибка обращения, она означает, что в коде используется имя (говорят идентификатор), которое не определено. 
    Причём в самой ошибке об этом говорят прямо: greeting is not defined, что переводится как greeting не определен. 
    Кроме неправильного порядка определения, в JavaScript встречаются банальные опечатки — как при использовании переменной, так и при её объявлении.

    Еще одна распространенная ошибка — попытаться объявить уже объявленную переменную:

    let greeting = 'Father!';
    let greeting = 'Father!';

    Так делать нельзя. Придётся создать новую переменную.
*/

//  Задание - Найдите в программе необъявленную переменную и объявите ее, присвоив ей значение 'Dragon';

let family = 'Targaryen';
let pet = 'Dragon';

console.log(family);
console.log('and');
console.log(pet);