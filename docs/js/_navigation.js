$(document).ready(function() {

	/* Call plugins hrere ...*/

// мобильная навигация

// var toogle = $("#nav-button");

// Создаем переменые для кнопки и для меню
	var pull = $("#nav-button");
	var nav = $(".nav_block");
	var Nav_icon = $('.navigation__tougle .fa');
	var iconNav = 'fa-bars tougle--white';
	var iconClose = 'fa-times tougle--blue';
	var blockLink = $(".nav_block a");
	var blockOpen = "nav_block--open";

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		$(nav).toggleClass(blockOpen);

		if (pull.hasClass("active")) {
        	pull.removeClass("active");
	    } else {
	        pull.addClass("active");
	    }


	

	});
	blockLink.on("click", function(){

			

			if (pull.hasClass("active")) {
	        	pull.removeClass("active");
		    } else {
		       pull.addClass("active");
		    }
	    
			nav.removeClass(blockOpen);	
	});
});