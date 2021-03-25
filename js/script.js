$(document).ready(function() { // Ждём загрузки страницы
	
	$('.slider').slick({
		arrows:true,
		draggable:false,
		autoplay:true,
		autoplaySpeed:4000,
		infinite:true,
		sopead:1000,
		fade:true,
		pauseOnFocus:false,
		appendArrows:$('.buttons')
		// centerMode:true
	});


	$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
		$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
	});

});

function showPopup() {
	$(".popup").fadeIn(800); // Медленно выводим изображение
}
