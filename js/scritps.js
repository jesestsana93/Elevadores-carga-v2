$(function() {
	/*-----------------------------------------------------------
        1. FUNCIONES PARA EL MENU PRINCIPAL
    -------------------------------------------------------------*/

	/*  Inserta y quita la clase ".icono-cerrar" al boton del menú*/
	$('#menu-navegacion .navbar-toggler').click(function() {
		$('.boton-menu').toggleClass('icono-cerrar');
	});

	/*Al hacer click en un enlace del menú principal */
	$('#menu-navegacion .navbar-nav a').click(function() {
		/* 1) Quita la clase ".icono-cerrar" */
		$('.boton-menu').removeClass('icono-cerrar');

		/*2) Contraemos el menu */
		$('#menu-navegacion .navbar-collapse').collapse('hide');
	});

	/*-----------------------------------------------------------
    2. CONFIGURACION DE SLICK PARA LA PARTE DE ALGUNOS DE NUESTROS CLIENTES
    ------------------------------------------------------------*/
	$('.clientes').slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: false,
		slidesToShow: 8,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		responsive: [
			{
				//Vista lg >=992px
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				//Vista md >=768px
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				//Vista sm >=576px
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			}
		]
	});

	/*-----------------------------------------------------------
    3. INICIANDO "page-scroll-to-id"
    -------------------------------------------------------------*/
	$('#menu-principal a').mPageScroll2id({
		offset: 165,
		highlightClass: 'active'
	});
});
