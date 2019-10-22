$(function(){
    $(function(){
        var slides = [
        {src: 'img/pizza1.jpg'},
        {src: 'img/pizza2.webp'}
        ];
        $('.carousel-demo').jR3DCarousel({      
        slides: slides,
        animation: "slide3D"
        });

        $('nav.mobile').on('click',function(){
        var listaMenu = $('nav.mobile ul');
        var icone = $('.botao-menu').find('i');
         if(listaMenu.is(':hidden')){
            listaMenu.slideDown('400');            
            icone.removeClass('fa-bars');
            icone.addClass('fa-times');
         }else{
            listaMenu.slideUp('400');
            icone.removeClass('fa-times');
            icone.addClass('fa-bars');
        }
        //listaMenu.slideToggle();
    });
      });

    window.fbAsyncInit = function() {
        FB.init({
          appId            : '523394391854280',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v4.0'
        });
      };

      var controller = new ScrollMagic.Controller();

});