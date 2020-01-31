// var name = "Ivan"; устареыший вариант

// let number = 7; может когда-то изменить значение
// const pi = 3.14; когда значение не меняется

// let number = 4;
// const pi = 3.14;

// number = 8;

// let leftBorderWidth = 200;

// типы данных
// number
// string - "", '', ``
// true/false
// null
// undefined
// object
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
// symbol

// alert(123);
// console.log(number);
// let answer = confirm ("Вам есть 18?");
// console.log(answer);

// let answer = prompt ("Вам есть 18?", "");
// console.log(answer);

// console.log(4+4);
// console.log(4+'gfhfhjfjfk'); конкатенация - склеивание строк
// console.log (4-'fhfhfhf'); NaN not a number

// let isChecked = true,
//     isClosed = false;

// console.log (isChecked && isClosed); оператор "и"
// console.log (isChecked || isClosed); оператор "или"

// if (2*4 == 8*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("Вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Уходите')
// }

// const num = 50;
// if (num < 49) {
//     console.log('неверно')
// } else if (num > 100) {
//     console.log('много')
// } else {
//     console.log('верно')
// }

// for(let i = 1; i < 8; i++) {
//     console.log(i)
// // }
// function logging(a, b) {
//     console.log(a + b)
// }
// logging(3, 5);
// logging(4, 9);

// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false
// 				}
// 			}
// 		]
// 	});
// });

const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});