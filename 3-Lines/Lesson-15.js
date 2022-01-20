// Lesson-5 Quotation marks

// 'Hello'
// 'Goodbye'
// 'G'
// ' '
// ''
// Любой одиночный символ в кавычках — это строка. Пустая строка '' — это тоже строка.

// Стандарт кодирования airbnb, рекомендует использовать, по возможности, одинарные кавычки.
console.log('Dracarys!');

// Если мы хотим написать кавычки, то необходимо воспользоваться экраном - \
// Экранируется только ", так как в этой ситуации двойные кавычки имеют специальное значение
console.log("Dragon's mother said \"No\""); 
// => Dragon's mother said "No"

// \ не выводится, если после него идет обычный, а не специальный символ
console.log("Death is \so terribly final");
// => Death is so terribly final

console.log("\"Khal Drogo's favorite word is \"athjahakar\"\"") 