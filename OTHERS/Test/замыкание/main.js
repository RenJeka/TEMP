// https://www.youtube.com/watch?v=RPuFz93Gvpk




// Если внешняя функция возвращает внутренюю функцию, то говорят, что внутреняя функция замкнута в области видимости внешней функции

// Допустим нам нужно создать программу-счетчик. Мы реализовываем её через простую функцию. Каждый раз, когда функция запускается → срабатывает счетчик и результат помещается в любую глобальную переменную.

var counter = 0;

function myCounter() {
	return ++counter ;
}


console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log("END PROGRAM-1");

// Мы создали такой код, но проблемма в том, что если мы хотим создать 100 таких счетчиков — нам придеться создать 100 глобальных переменных (что плохая практика) и 100 реализаций функций.

// Такая задача решается с помощью замыкания. Создается 1 функция переменной счетчика, которая возвращает другую - внутренюю функцию, в которой уже прописывается функционал работы счетчика. 
// Говорят, что внутреняя функция "замкнулась" в области видимости внешней функции, так что если создать много "реализаций" этой внешней функции, например поместить эту внешнюю функцию в переменную, — то с каждой такой переменной мы создадим новую замыкающую (закрытую) область видимости.
// Теперь счетчики можно создавать только с помощью переменных (каждый раз туда помещаеться новая область видимости) и описания 1 функции


// Внешняя функция, которая замыкает в себе область видимости.
function externalCountFunc() {
	var counter = 0;

	// Внутреняя функция, которая использует замыкание
	return function internalCountFunc() {
		return ++counter;
	}
}

// Теперь с помощью переменных создаем хоть 500 таких счетчиков и пользуемся всего 1 функцией, но многими областями видимости.
var myCounter1 = externalCountFunc();

console.log(myCounter1());
console.log(myCounter1());
console.log(myCounter1());
console.log("END working — myCounter1");

var myCounter2 = externalCountFunc();

console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log("END working — myCounter2");


// Идея в том, что в момент запуска любой функции — эта функция (этот процесс) является не просто выполнением кода, но еще это и процесс доступа этой функции к данным. 
// Можно задать себе вопрос: доступ к каким данным имеет эта функция?

// Функция в момент запуска= код функции + доступные данные!!!