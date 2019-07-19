$(document).ready(function(){

	// $("nav").hide();

    
    // Создаем переменые для кнопки и для меню
	var pull = $("#nav_mobile");
	var nav = $(".nav_block ul");

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

        // Открываем/Скрываем меню
		$(nav).slideToggle();

		$(this).toggleClass('nav_mobile--active')


	});


    // При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 992) {
	        nav.removeAttr('style');
	        pull.removeClass('nav_mobile--active');
	    } else {

	    }
	});

	// Скрываем меню при клике на него на смартфоне и планцете
	// По клику на ссылку в меню запускаем ф-ю fnstart();
	$('nav .navigation a').on("click", function(){
		fnstart();
	});

	// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
	// тогда убираем класс модификатор --active у кнопки pull
	// и сворачиваем/скрываем меню 
	function fnstart(){	
		if ( $("#nav_mobile").hasClass("nav_mobile--active")  ) {
   			pull.toggleClass('nav_mobile--active');
			nav.slideToggle();
		}
	};


	// Carousel
	$("#owl-carousel").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "theme_opollo",
		navigationText: ["", ""],
	});
	 
	//slide2id

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

});