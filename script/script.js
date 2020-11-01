$(function () {
	// Адаптивные ссылки
	$(".header__nav__link").on("click", function (e) {
		e.preventDefault();

		let attr = $(this).attr("href");

		if ($(".circleMenu").hasClass("go")) {
			$(".circleMenu").animate({
				"width": "50px",
				"height": "50px",
				"border-radius": "50%",
			}, 0, function () {
				$(".header__nav").css("display", "none");
				$(this).css("top", "auto");
				$(".header__nav__btn").removeClass("exit");
				$("html").animate({
					scrollTop: $(attr).offset().top,
				}, 800)
			})
		}
	})

	// Кнопка Меню
	$(".header__nav__btn").on("click", function () {
		let $circle = $(".circleMenu");
		let $nav = $(".header__nav");

		$($circle).toggleClass("go");

		setTimeout(() => {
			if ($($circle).hasClass("go")) {
				$($circle).animate({
					"width": "100%",
					"height": "100%",
					"left": "50%",
					"top": "50%",
					"border-radius": "0",
				}, 0, function () {
					$($nav).css("display", "flex");
					$(".header__nav__btn").addClass("exit");
				})
			} else {
				$($circle).animate({
					"width": "50px",
					"height": "50px",
					"border-radius": "50%",
				}, 0, function () {
					$($nav).css("display", "none");
					$(this).css("top", "auto");
					$(".header__nav__btn").removeClass("exit");
				})
			}
		}, 300)
	})

	// Изменение текста
	let $buttons = $(".product__content__buttons .button");
	$($buttons).on("click", function (e) {
		e.preventDefault();
		$($buttons).removeClass("activeBtn")
		$(this).addClass("activeBtn")


		let $txt = "." + $(this).data("text");
		$(".product__content__texts .text").removeClass("show");
		$($txt).addClass("show");
	})

	// Кнопка наверх
	$(".rowUp").on("click", function (e) {
		e.preventDefault();

		$("html").animate({
			scrollTop: 0,
		}, 1000)
	})

	// Убираем кнопку наверх
	function rowUpScroll() {
		if ($(this).scrollTop() > 1000) {
			$(".rowUp").addClass("rotate");
		} else {
			$(".rowUp").removeClass("rotate");
		}
	}
	$(window).on("scroll", rowUpScroll);
	rowUpScroll();

	// Валидация формы
	$(".footer__copyright form").on("submit", function (e) {
		let $email = $(".footer__copyright__txt").val();
		if ($($email).length < 1) {
			$(".footer__copyright__txt").val("Enter correct email!")
			e.preventDefault();
		}
	})

	//Показ видео
	$(".about__video").on("click", function () {
		$(".about__video__popUp").addClass("show");
		$(".overlay").addClass("show");
	})

	$(".overlay").on("click", function () {
		$(this).removeClass("show");
		$(".about__video__popUp").removeClass("show");
		document.querySelector(".about__video__popUp video").pause();
	})


	/* slider */
	$(".slider").slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,

		autoplay: true,
		autoplaySpeed: 3000,//  По умолчанию - 3к

		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 756,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
		]
	});

	$(".slick-prev").text("←");
	$(".slick-next").text("→");
})