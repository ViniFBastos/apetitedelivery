$(document).ready(function(){
	var alturaTela = $(window).height();

	$('.banner-home').css('height', alturaTela);
	$('.banner-home .texto-banner').css('height',alturaTela - 100);
	$('.banner-home .content-texto').css('height',alturaTela - 100);
	$('.banner-home .text-inner').css('height',alturaTela - 100);
	if(alturaTela > 600){
		$('.banner-home').removeClass('responsivo');
	}
	else{
		$('.banner-home').addClass('responsivo');	
	}
});


$(window).resize(function(){
	var alturaTela = $(window).height();

	$('.banner-home').css('height', alturaTela);
	$('.banner-home .texto-banner').css('height',alturaTela - 100);
	$('.banner-home .content-texto').css('height',alturaTela - 100);
	$('.banner-home .text-inner').css('height',alturaTela - 100);
	if(alturaTela > 600){
		$('.banner-home').removeClass('responsivo');
	}
	else{
		$('.banner-home').addClass('responsivo');	
	}
});