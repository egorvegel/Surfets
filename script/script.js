$(function () {
	let $circle = $(".circleMenu");
	let $nav = $(".header__nav");
	let time = 300;
	// Адаптивные ссылки
	$(".header__nav__link").on("click", function (e) {
		e.preventDefault();
		$($circle).toggleClass("go");

		let attr = $(this).attr("href");
		if (attr.length > 1) {
			animateMenu();

			setTimeout(function () {
				$("html").animate({
					scrollTop: $(attr).offset().top,
				}, 800);
			}, time + 200)
		}
	})

	// Кнопка Меню
	$(".header__nav__btn").on("click", function () {
		$($circle).toggleClass("go");
		animateMenu();
	})

	function animateMenu() {
		$($circle).css("bottom", "50%")
		if ($($circle).hasClass("go")) {
			console.log(1);
			$($circle).animate({

				"width": "100%",
				"height": "100%",

				"border-radius": "0",
			}, time, function () {
				$($nav).css("display", "flex");
				$(".header_social").css("display", "block");
				document.body.style.overflow = "hidden";
				$(".header__nav__btn").addClass("exit");
			})
		} else {

			$($circle).animate({
				"width": "50px",
				"height": "50px",
				"border-radius": "50%",
			}, time, function () {
				$($nav).css("display", "none");
				$(".header_social").css("display", "none");
				document.body.style.overflow = "visible";
				$(".header__nav__btn").removeClass("exit");
				setTimeout(function () {
					$($circle).css("bottom", "-5%")
				}, time)

			})

		}
	}

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
	let $slider = $(".slider");
	$($slider).slick({
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
					slidesToScroll: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 756,
				settings: {
					dots: true,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
				}
			},
		]
	});

	$(".slick-prev").text("←");
	$(".slick-next").text("→");
})