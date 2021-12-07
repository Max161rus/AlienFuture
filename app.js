

var main = function () {
"use strict";
var addCommentFromInputBox = function () {
var $new_comment;
if ($(".comment-input input").val() !== "") {
$new_comment = $("<p>").text($(".comment-input input").val());
$new_comment.hide();
$(".comments").append($new_comment);
$new_comment.fadeIn();
$(".comment-input input").val("");
}
};
$(".comment-input button").on("click", function (event) {
addCommentFromInputBox();
});
$(".comment-input input").on("keypress", function (event) {
if (event.keyCode === 13) {
addCommentFromInputBox();
}
});
};
$(document).ready(main);
/*
var $newUL = $("<ul>"); // создание нового элемента списка
var $newParagraphElement = $("<p>"); // создание нового абзаца
$newParagraphElement.text("Слово");
$("footer").append($newParagraphElement);

// мы можем соединить наше творение и обратиться к нему, чтобы добавить текст
var $listItemOne = $("<li>").text("Это первый элемент списка");
var $listItemTwo = $("<li>").text("Второй элемент списка");
var $listItemThree = $("<li>").text("Боже, третий элемент списка");
// а сейчас мы привяжем эти элементы к ul, созданному ранее
$newUL.append($listItemOne);
$newUL.append($listItemTwo);
$newUL.append($listItemThree);

$("main").append($newUL);

$("button").on("dblclick", function () {
alert("Эй! Ты дважды щелкнул кнопкой мыши!");
});

var main = function () {
"use strict";
// создаем и тут же скрываем комментарий в элементе div
var $content = $("<div>Hello, World!</div>").hide();
var $moreContent = $("<div>Goodbye, World!</div>").hide();
// отправляем содержимое в элемент body
$("body").append($content);
// заставляем содержимое постепенно раскрываться вниз за 2 секунды,
// а затем выполняем обратный вызов, в котором
// находится другое содержимое
$content.slideDown(2000, function () {
	// отправляем новое содержимое в body
$("body").append($moreContent);
// заставляем новое содержимое постепенно отобразиться
$moreContent.fadeIn();
});
};
$(document).ready(main);



//var $zalupa = $("<h1>").text("Я первый дочерний элемент подвала!");
//$(".comment-input").prepend($zalupa);

var $max161 = $("<h1>").text("");

	$("table").prepend($max161);
	
	
	*/
	
	//$("header").remove();
	
//var i;

//for (i = 1; i <= 100; i = i + 1) {
// if (i%3==0 &&i%5 === 0) {
//console.log("FizzBuzz");	
//}
//else if (i%3 === 0) {
//console.log("Fizz");
//} else if (i%5 === 0) {
//console.log("Buzz");
//} else {
//console.log(i);	
//}
//}

	
//var sum = function (nums) {
//var sumSoFar = 0, i;
//for (i = 0; i < nums.length; i++) {
//sumSoFar = sumSoFar + nums[i];
//}
//return sumSoFar;
//};

//console.log(sum([1,5]));


//var r = [1,2];
//var i;
//console.log (r.length);
//for (i=0; i < r.length; i++) {
//	console.log(i);
//}

 /*считывание количество камней из инпутов*/

	

///////////////
	


document.forms.publish.onsubmit = function() {
	
	var message1 = document.getElementById("max11").value;
	var message2 = document.getElementById("max22").value;	
	var message3 = document.getElementById("max33").value;
	var message4 = document.getElementById("max44").value;
	var message5 = document.getElementById("max55").value;
	var message6 = document.getElementById("max66").value;
	
	
	var e1 = Number(message1);
	var e2 = Number(message2);
	var e3 = Number(message3);
	var e4 = Number(message4);
	var e5 = Number(message5);
	var e6 = Number(message6);
	
	

var Izumrud_Summ = function (e1,e2,e3,e4,e5,e6) { // массив алмазов


var mus1 = [e1,e2,e3,e4,e5,e6];


//////////////////////
	
var mus2 = [], a = 0, b = 0, c = 0;
	
while (b < mus1.length) {  // рассчитаем псевдовозможные значения для Алмазов
							// и запишем их в массив mus2
	while (c < mus1.length) {
		
		if (b != c) {
		
			mus2[a] = mus1[b] + mus1[c];
		
			a = a + 1;
			
			} 
		
		c = c + 1;
				
		}
		
	b = b + 1;
	
	c = 0;
	
}
	
/*Рассчитаем сумму элементов входного массива mus1*/	 

var Summ = 0; // переменная которая будет хранить сумму комней во всех коробках

var e;

for (e = 0; e < mus1.length; e++) {
	
	Summ = Summ + mus1[e];
	
}
	
/*создадим массивы mus3, mus4 и зпишим в него полученный массив mus2*/  

var mus3 = [];

var mus4 = [];

mus3 = mus2;

mus4 = mus2;

/*создадим 3 переменных для каждого камня*/  

var Al, Iz, Ru;

var f = 0;

var g = 0;

var h = 0;

var Summ_id // переменная суммы элементов трех массиво, сравниваемая с Summ

/*создадим цикл перемножения каждого элемента массива mus2 на эл. массива mus3*/

var Not = "Решения нет! Введите правельные данные!" 

while (f < mus2.length) {
			
	while (g < mus3.length) {
						
		while (h < mus4.length) {
									
			Al = mus2[f];
	
			Iz = mus3[g];
	
			Ru = mus4[h];
			
			h = h + 1;
		
			if ((2*Al + Iz + 16 == Summ)&&(Al + Iz + Ru == Summ)) {
				
								
				//alert( "Ответ: в шкатулках" + " " + Iz + " " + "изумрудов" );
				
				document.getElementById("max77").value = ( "В шкатулках" + " " + Iz + " " + "изумрудов" );
				
				return (Iz);
				
				
			} 
			
						
		}
		
		h = 0;
		
		g = g + 1;
				
	}
	
	g = 0;
	
	f = f + 1;
	
} 

//alert( Not );

document.getElementById("max77").value = Not;

return (Not);	

};




console.log(Izumrud_Summ(e1,e2,e3,e4,e5,e6)); 	// в скобках аргумент функции, то есть 
											// значение массива mus1
 
return false;
 
};

 	// в скобках аргумент функции, то есть 
											// значение массива mus1


// Решение задачек из книги

//1. Функция с аргументом состоящим из массива и возвратом среднего значения

/*var Average = function (array_input) {

var amout = 0;
	
var postfix;

	for (postfix = 0; postfix < array_input.length; postfix++) {
		
		amout = amout + array_input[postfix];
		
	}
	
		amout = amout/array_input.length;
		
		return (amout);
		
};

console.log(Average([4,4,4])); */

//1. Функция ищущая наибольшее значение в массиве
/*
var largest = function (array_input) {
	
var a , b;

var d = 0;

var e = 0;

var f = 0;



	for (a = 0; a < array_input.length; a++) {
		
		d = array_input[a];
		
			for (b = 0; b < array_input.length; b++) {
		
				e = array_input[b];
		
					if (d>=e) {
						
						f = f + 1;
						
					}
					
			}
			
			if ( f == array_input.length) {
				
				return (d);
				
			}

			b = 0;
			
			f = 0;
			
			

	}
	
	
			
};

console.log(largest([15,12,48,4,215,33,24,180,22,1,1,4,5,6])); 
*/
/*
var largest = function (array_input) {
	
var a;

var b = 0;

b = array_input[0];

for (a = 1; a <  array_input.length; a++) {
	
		if (array_input[a] > b) { b = array_input[a];}
					
}

return (b);
		

};

console.log(largest([15,12,48,4,215,33,24,,437,180,22,1,1,4,5,1])); */

/*

var largest = function (array_input) {
	
var a;

var b = 0;

var c = 0;

b = array_input[0];

for (a = 1; a <  array_input.length; a++) {
	
		c = b - array_input[a];
		
		if (c < 0) { b = array_input[a];}
					
}

return (b);
		

};

console.log(largest([15,12,48,888,215,33,24,,437,180,22,1,1,4,5,1]));
*/

//

/*
	
var largest = function (array_input) {
	
var a;

var b = "true";

var c = 0;

for (a = 0; a <  array_input.length; a++) {
	
		if (array_input[a]%2 != 0) {
			
			c = c + 1;
			
			if ( c == 3 ) {
			
			a = array_input.length;
			
			b = "false";
			
			}
			
			}
		
}

return (b);
		

};

console.log(largest([1,6,3,10,11,12]));
*/


//var largest = function (array_input_string, string, value_variable) {
	
//var counter;

//var true_false = "false";

//var flug_out = 0;

//var counter_start = 0;

//for (counter = counter_start; counter <  array_input_string.length; counter++) {
	
		
//			if (array_input_string[counter] == string) {
				
//				flug_out++;
				
//				if ( flug_out == value_variable ){
				
//				true_false = "true";
				
//				counter = array_input_string.length;
				
//				}
				
//			}
		
//}

//return (true_false);
		

//};

//console.log(largest(["1","2","3","4","2","4","2"],"2",4));


 //return
/* var temp;
 CurentWordNumSys = document.f1.s1.value;
  
    switch (PrevWordNumSys){
		case "HEX":  aword = parseInt(aword, 16);break
		case "OCT": aword = parseInt(aword, 8);break
		case "DEC": aword = parseInt(aword, 10);break
		case "BIN": aword = parseInt(aword, 2);
		} 
 	
 		switch (CurentWordNumSys){
		case "HEX": aword = aword.toString(16).toUpperCase();break
		case "OCT":aword = aword.toString(8);break
		case "BIN":aword = aword.toString(2);break
		case "DEC":aword = aword.toString(10);
		}
		document.f1.output.value = aword;
	PrevWordNumSys = CurentWordNumSys; */














/////////////////////////////////////////////////////////////////////
/*

document.forms.publish.onsubmit = function() {
	
	var message1 = document.getElementById("max11").value;
		
	var e1 = message1;
					
	

var max = function (e1) {
	
	var b = 0;
	
	var c = 6;
	
	b = c+ Number(e1);
	
	return b;
	
};

console.log (max(e1));


return false; 
};

////////////////////////////////////////
*/




/*


var main = function () {
"use strict";
console.log("Hello, World!");
}
$(document).ready(main);



var main = function () {
"use strict";
// getJSON сразу интерпретирует JSON, поэтому
// нет необходимости вызывать JSON.parse
$.getJSON("cards/aceOfSpades.json", function (card) {

// вводим карту в консоль
console.log(card);
});
};
$(document).ready(main);




*/
/*
var main = function () {
"use strict";
console.log("Hello, World!");
}
$(document).ready(main);

var main = function () {
"use strict";

$.getJSON("cards/aceOfSpades.json", function (card) {

console.log(card);
});
};
$(document).ready(main);
*/

	
//let sec = 0 ;

//let min = 0  ;

//let hour = 0 ;

/*
document.forms.publish1.onsubmit = function() {
	

	let sec = min = hour = 0;
	
	 sec = document.getElementById("sec").value;
	 min = document.getElementById("min").value;	
	 hour = document.getElementById("hour").value;
	 
	 console.log(sec, min, hour)
	 
	 
	 



setInterval(function () {
	
	document.getElementById("sec").value = ++sec
	
		if (sec >= 60) {document.getElementById("sec").value = sec = 0, document.getElementById("min").value = ++min}  
		
		if (min >= 60) {document.getElementById("min").value = min = 0, document.getElementById("hour").value = ++hour}
		
		if (hour >= 24) {document.getElementById("sec").value = document.getElementById("min").value = document.getElementById("hour").value = sec = min = hour = 0}

}, 1000)


return false;
	
}
*/
                             /*Работа с DOM*/
						
//window.alert(1)

//window.prompt('Как тебя зовут?')

//console.log(window.prompt('Как тебя зовут?'))

//window.confirm('Как тебя зовут?')

//console.log(window.confirm('Как тебя зовут?'))

//setTimeout(() => {
	
const heading = document.getElementById('Alien')


/*
console.log(heading)

console.log(heading.textContent)

heading.innerText = 'Да не такие уж и Чужие'

heading.innerHTML = 'Уже Свои'

console.dir(heading)

heading.style.color = 'red'

heading.style.textAlign = 'center'

heading.style.backgroundColor = 'white'

heading.style.padding = '2rem'

}, 1500) */

setTimeout(() => {

addStylesTo(heading)

}, 1500)

function addStylesTo(node) {
	
node.textContent = 'ALIEN LOVING YOU'	
	
node.style.color = 'red'

node.style.textAlign = 'center'

node.style.backgroundColor = 'white'

node.style.padding = '1rem'
	
}
///////////////////////// Блок бегущих красных букв


var iop = 0

const newObject = {

 a1: document.getElementById('a'),

 b1: document.getElementById('b'),

 c1: document.getElementById('c'),

 d1: document.getElementById('d'),

 e1: document.getElementById('e'),

 f1: document.getElementById('f'),

 g1: document.getElementById('g'),

 h1: document.getElementById('h'),

 j1: document.getElementById('j'),

 k1: document.getElementById('k')

}

const newArr = [newObject.a1, newObject.b1, newObject.c1, newObject.d1, newObject.e1, newObject.f1, newObject.g1, newObject.h1, newObject.j1, newObject.k1]

let counter = 0;

let counterMinus = 0;

function styleFuck (fuck) {
	
	fuck.style.color = 'red'
	
	fuck.style.opacity = '1'
	
	fuck.style.backgroundColor = 'lime'
	
	fuck.style.fontSize = '3.5rem'
}

function styleBitch (bitch) {
	
	bitch.style.color = 'lime'
	
	bitch.style.opacity = '1'
	
	bitch.style.backgroundColor = 'red'

	bitch.style.fontSize = '3rem'
	
}

function delay(){
	
}

var data = () => counterMinus = counter

var deLayOne = (data,delay) => setTimeout (()=>data, delay)


function runFire () {
	
	if ( counter < newArr.length){
		
	styleFuck(newArr[counter])
	
	counter++
				
	if (counter === newArr.length) {
		
		setTimeout(() => counterMinus = counter, 80)
		
	}
		
	} 
			
	if (counterMinus > 0){
			
		counterMinus = counterMinus - 1
		
		styleBitch(newArr[counterMinus])
		
		
		
		if (counterMinus === 0) {
		
		counter = counterMinus
		
	}
			
	}
	
	}

setInterval(runFire, 80)

//runFire ()


//function runFire () {
	
//	console.log(counter)
	
//	if (counter < newArr.length){
	
//	styleFuck(newArr[counter])
	
//	counter++
		
//	}
	
	
//}

//setInterval (runFire , 500)

	
/////////////////////////////


/*
if (counter < newArr.length) {

setInterval(() => {

incrementIop ()

console.log('количество элементов массива', newArr.length)

console.log('переменная iop', iop)

console.log('значение счетчика', counter)

}, 300)

}  

else  {
	
setInterval(() => {

decrementIop ()

console.log ('XER')

}, 300)
	
}

*/
//////////////////////////////////////
/*
setInterval(() => {

decrementIop ()

}, 300)
	
function styleBitch (bitch) {
	
	bitch.style.color = 'white'
	
	bitch.style.opacity = '0.4'
	
}

function decrementIop () {
	
	if (iop > 0) {
	
	styleBitch (newArr[iop])
	
	iop--
	
	}
	
}

*/

/*

function addStylesToText2(text2) {
	
text2.style.color = 'red'
	
}
*/




                       /* Получение тега h2 */
					   

//const heading2 = document.getElementsByTagName('h2')

//console.log(heading2[0])

//const heading2 = document.getElementsByClassName('heading2')[0]

//console.log(heading2)

//const heading2 = document.querySelector('h2')

/*
const heading2 = document.querySelector('.heading2')

console.log(heading2.innerText)

const as = heading2.innerText

console.log(as)



heading2.innerText = 'Пошел ты на, хотя постой'

console.log(heading2.innerText)
*/



	
const oneSecond = () => 1000

const getCurrentTime = () => new Date()

const clear = () => console.clear()

const log = message => console.log(message)


const outTime = () => {


//clear()

const serializeClockTime = date =>

({
	
hours: date.getHours(),

minutes: date.getMinutes(),

seconds: date.getSeconds(),

ampm: "AM"

})


let inTime = serializeClockTime(getCurrentTime())

let amPm = inTime => {

				
		inTime.minutes < 10 ? inTime.minutes = "0" + inTime.minutes : inTime.minutes
		
		inTime.seconds < 10 ? inTime.seconds = "0" + inTime.seconds : inTime.seconds
		
		inTime.hours > 12 ? (inTime.hours = inTime.hours - 12) & (inTime.ampm = "PM") : inTime.hours & (inTime.ampm = "AM")
		
		inTime.hours < 10 ? inTime.hours = "0" + inTime.hours : inTime.hours
		
		
		document.getElementById("hour").value = inTime.hours
		
		document.getElementById("min").value = inTime.minutes
		
		document.getElementById("sec").value = inTime.seconds
		
		document.getElementById("ampm").value = inTime.ampm
	
		
		return inTime.hours + ":" + inTime.minutes + ":" + inTime.seconds + " " + inTime.ampm
		
}


inTime = amPm(inTime)

//log(inTime)


}

	
setInterval(outTime, oneSecond())	
	

