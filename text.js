1
//как называется функция 
function showMessage(параметры) {
    //код
}
//обычный

2
//как называется функция 
let showMessage = function(параметры) {
    //код
}
//функциональный

3
//как называется функция 
let showMessage = (параметры) => {
    //код
}
//стрелочный

4
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function textstart(Запуск){
    Запуск = String()
}
console.log(textstart());

5
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function parametr(a, b){
    return a + b
}
console.log(parametr(5, 5));

6
//конвертируйте функцию ниже в функциональное вырожение
function sum(text='text', age=24) {
    return `${text} ${age}`;
}

7
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 
const myFunc = new Function('a', 'b', 'return a + b')
let a = myFunc(500, 100)

8
//можно ли вызвать функцию до ее обьявления?
//Нет!

9
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
//?

10
//что такое arguments в функциях?
function sum(text, age) {
    console.log(arguments);
}

sum('text', 24);
//это подобный массиву объект, который содержит аргументы, переданные в функцию.

11
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    return text + age
}
console.log(sum('text', 24));

12
//задайте параметру text значение 'some text' по умолчанию
function sum(text, age) {
    //код
}

sum('some text', 24);

13
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
console.log(sum());

14
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person1 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person2 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

15
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person3 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person4 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

16
//какой из методов может принять массив параметров
call()
apply()
//apply

17
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
//Math.max()

18
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
//Math.max

19
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
//Math.min

20
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
//Math.min