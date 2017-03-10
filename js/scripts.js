$(document).ready(function(){
    $('#OwlOne').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      responsiveRefreshRate: 0,
      margin: 20,
      dots: true,
      autoHeight:true
  });    
  $('#OwlTwo').owlCarousel({
      loop:false,
      items: 5,
      autoplay: true,
      responsiveRefreshRate: 0,
      margin: 20,
      dots: true,
      responsive:{
        0:{
            items:2,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
  });

  var alturaTela = $(window).height();

  $('.banner-home').css('height', alturaTela);
  $('.banner-home .texto-banner').css('height',alturaTela - 100);
  $('.banner-home .content-texto').css('height',alturaTela - 100);
  $('.banner-home .text-inner').css('height',alturaTela - 100);

  $('.loja-demonstracao').css('height', alturaTela);
  $('.loja-demonstracao .texto-banner').css('height',alturaTela);
  $('.loja-demonstracao .content-texto').css('height',alturaTela);
  $('.loja-demonstracao .text-inner').css('height',alturaTela);
  if(alturaTela > 600){
    $('.banner-home').removeClass('responsivo');
  }
  else{
    $('.banner-home').addClass('responsivo'); 
  }

  $('#form-contato').validate();

  //Máscara 9º dígito
  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    clearIfNotMatch: true,
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
  };

  $('.input-telefone').mask(SPMaskBehavior, spOptions);

});


$(window).resize(function(){
  var alturaTela = $(window).height();

  $('.banner-home').css('height', alturaTela);
  $('.banner-home .texto-banner').css('height',alturaTela - 100);
  $('.banner-home .content-texto').css('height',alturaTela - 100);
  $('.banner-home .text-inner').css('height',alturaTela - 100);
  
  $('.loja-demonstracao').css('height', alturaTela);
  $('.loja-demonstracao .texto-banner').css('height',alturaTela);
  $('.loja-demonstracao .content-texto').css('height',alturaTela);
  $('.loja-demonstracao .text-inner').css('height',alturaTela);
  if(alturaTela > 600){
    $('.banner-home').removeClass('responsivo');
  }
  else{
    $('.banner-home').addClass('responsivo'); 
  }
});