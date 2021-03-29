$(document).ready(function() { // Ждём загрузки страницы
	
	$('.slider').slick({
		arrows:true,
		draggable:false,
		autoplay:true,
		autoplaySpeed:4000,
		waitForAnimate:false,
		infinite:true,
		speed:1000,
		fade:true,
		pauseOnFocus:false,
		appendArrows:$('.buttons'),
		centerMode: true,
	});


	$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
		$(".popup").fadeOut(500);	// Медленно убираем всплывающее окно
	});

});

function showPopup() {
	$(".popup").fadeIn(500); // Медленно выводим изображение
};

function clearPopup() {
	$(".popup").fadeOut(500);
	$('#myform')[0].reset();
	$("input").attr("placeholder", "");
};

function validateForm() {
	$("input").attr("placeholder", "Поле обязательно для заполнения");
}