$(document).ready(function() {

	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	$('#work-filter').mixItUp();

	$('#mail-form').validate({
		rules: {
			name: { required: true},
			email: { required: true, email: true},
			// skype: { required: true},
			// phone: { required: true},
			message: { required: true}
		},
		messages: {
			name: "Введите свое имя",
			email: {
				required: "Введите свой email",
				email: "Email адрес должен быть в формате name@domain.com"
			}
			,
			message: "Введите сообщение"
		},

		submitHandler: function(form) {
		  ajaxFormSubmit();
		}
	})

	// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#mail-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#mail-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
	
});