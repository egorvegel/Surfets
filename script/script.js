$(function () {
	// Адаптивные ссылки
	$(".header__nav__link").on("click", function (e) {
		e.preventDefault();

		let attr = $(this).attr("href");
		console.log($(attr).offset().top);
		$("html").animate({
			scrollTop: $(attr).offset().top,
		}, 800)
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