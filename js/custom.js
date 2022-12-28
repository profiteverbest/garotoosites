;(function($){
    "use strict"
    var nav_offset_top = $('.header_area').height()+50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    function testimonialSlider(){
        if ( $('.testimonial_slider').length ){
            $('.testimonial_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                dots: true,
                smartSpeed: 1500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                }
            })
        }
    }
    testimonialSlider();
    
    //------- Mailchimp js --------//  

    function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
    
    /* ===== Parallax Effect===== */
	
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();
    
    
    
     /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('#gallery').length ){
            $('#gallery').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $("#gallery").isotope({
                    itemSelector: ".gallery_item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            })
        }
    }
    galleryMasonry();
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();
    
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#808080"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#dcdfe6"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ebebeb"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#efefef"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#737373"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                }
            ]
        });
    }

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        $('.navbar-collapse').collapse('hide');
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 150)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });

      $(document).ready(function () {
    
        /* -------- FORM DE ENVIO DE EMAIL ----------- */
        $('#formularioReserva').submit(function () {
          $("#iconeBotaoReserva").removeClass("fa fa-paper-plane-o").addClass("fa fa-spinner fa-spin");
          var dados = {};
          dados.remetente = "Site Faixa Hotel";
          dados.titulo = "Solicitação de Reserva Site Faixa Hotel";
          dados.html = "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>"+"<table width='100%' cellspacing='0' cellpadding='0' style='background-color: #fff;'>"+ "<tbody>"+ "<tr>"+ "<td align='center' valign='top'>"+ "<table class='mobile-shell' width='700m' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='td' style='width: 700mpx; min-width: 700mpx; font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal;'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='1'>"+ "</td>"+"<td>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;background-color: #001b5e;' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='40'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='1'>"+   "</td>"+"<td>"+ "<div class='img' style='font-size: 0pt; line-height: 0pt; text-align: left;'>"+ "<a href='http://www.brmap.com.br/' target='_blank' rel='noopener'>"+"<img src='https://i.imgur.com/4v1XLLd.png' alt='' style='width: auto; height: 100px; margin-left: auto; margin-right: auto; margin-top: 5px; margin-bottom: 5px; display: block;'/>"+"</a>"+ "</div>"+"</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='1'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td bgcolor='#001b5e'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"<td>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='10'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text1' style='color: #ffffff; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: center;'>"+ "SOLICITAÇÃO DE RESERVA "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='10'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td bgcolor='#f5f5f5'>"+ "<table border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"<td>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Enviado por:"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputnome").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Telefone: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputtelefone").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Email: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputemail").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='35'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Data Chegada: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputdatainicial").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Data Saída: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputdatafinal").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Tipo Apto.: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputtipoapto").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Qtd. Hóspedes: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputqtdhospedes").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Qtd. Crianças (Até 5 anos): "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputqtdcriancas").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "Texto: "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: left;'>"+ "<strong>"+$("#inputobservacao").val()+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='25'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td style='background-color: #fff568;'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"<td>"+ "<div class='text1' style='color: #001b5e; font-family: Arial,sans-serif; font-size: 18px; line-height: 29px; text-align: center;'>"+ "NÃO RESPONDA ESTE E-MAIL!"+"</div>"+"</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<th class='column' style='font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal;' valign='top' width='350'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td>"+ "<div class='fluid-img' style='font-size: 0pt; line-height: 0pt; text-align: left;'>"+ "<a href='#' target='_blank' rel='noopener'>"+"<img src='https://i.imgur.com/ra6hoqX.png' alt='' width='350' height='349' border='0'/>"+"</a>"+ "</div>"+"</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</th>"+ "<th class='column' style='font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal;' valign='top' bgcolor='#f5f5f5'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td>"+ "<table border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"<td>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='30'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text2' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 18px; line-height: 22px; text-align: center;'>"+ "<strong>"+"Mensagem recebida do site Faixa Hotel"+"</strong>"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='20'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text4' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 14px; line-height: 18px; text-align: center;'>"+ "Endereço :Av. Juracy Magalhães, 130 Bela Vista, Vitória da Conquista - BA "+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text4' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 14px; line-height: 18px; text-align: center;'>"+ "Email: reservas@faixahotel.com.br"+"</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<div class='text4' style='color: #3a3449; font-family: Arial,sans-serif; font-size: 14px; line-height: 18px; text-align: center;'>"+ "Telefone: (77) 3422 5595"+ "</div>"+"<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='5'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='20'>"+ "<img style='width: 50%; height: auto;' src='https://i.imgur.com/HQfO4AH.png' alt='QRCODE FaixaHotel'>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</th>"+ "</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td style='background-color: #3a3449;'>"+ "<table width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"<td>"+ "<div class='text1' style='color: #fff; font-family: Arial,sans-serif; font-size: 11px; line-height: 20px; text-align: center;'>"+ "Desenvolvido por "+ "<a style='color:lightgray' target='_blank' href='http://www.arguscomputacao.com.br/'>"+"Argus Computação"+"</a>"+"."+ "</div>"+"</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "<table class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' border='0' width='100%' cellspacing='0' cellpadding='0'>"+ "<tbody>"+ "<tr>"+ "<td class='spacer' style='font-size: 0pt; line-height: 0pt; text-align: center; width: 100%; min-width: 100%;' height='15'>"+   "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"<td class='content-spacing' style='font-size: 0pt; line-height: 0pt; text-align: left;' width='1'>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+ "</table>"+ "</td>"+"</tr>"+"</tbody>"+"</table>";
    
    
          $("#botaoFormularioReserva").prop("disabled", true);
          $.ajax({
              url: "https://digitalocean.arguscomputacao.com.br/ArgusComputacao/api/public/email/enviar/61",
              type: "POST",
              data: JSON.stringify(dados),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (mensagem) {
                  $('#pMensagem').html(mensagem.message);
                  $('#modalAviso').modal('show');
                  $('#formularioReserva').trigger("reset");
              },
              complete: function () {
                  $("#botaoFormularioReserva").prop("disabled", false);
                  $("#iconeBotaoReserva").removeClass("fa fa-spinner fa-spin").addClass("fa fa-paper-plane-o");
                  
              },
              error: function () {
                  $('#pMensagem').html("Erro ao enviar a solicitação, tente novamente mais tarde.");
                  $('#modalAviso').modal('show');
              }
          });
          return false;
      });
      });

})(jQuery)