$(document).ready(function(){
  if($(window).scrollTop()>50){
    $('.logo-text').hide();
  }
  else{
    $('.logo-text').show();
  }
  //   var groups = {};
  // $('.galleryItem').each(function() {
  //   var id = parseInt($(this).attr('data-group'), 10);
    
  //   if(!groups[id]) {
  //     groups[id] = [];
  //   } 
    
  //   groups[id].push( this );
  // });
  
  
//   $.each(groups, function() {
//     // $(this).magnificPopup({
//     //     type: 'image',
//     //     closeOnContentClick: true,
//     //     closeBtnInside: false,
//     //     gallery: { enabled:true }
//     $(this).magnificPopup({
//       items: {
//           src: '#popup-carousel-holder',
//           type: 'inline'
//       },
//       closeBtnInside: false
//      });    
// });
  // $('body').scrollspy({
  //   target: '#myNavigator',
  //   offset: 57
  // });
  $('a.galleryItem').magnificPopup({
    items: {
        src: '#popup-carousel-holder',
        type: 'inline'
    },
    closeBtnInside: false
   }); 
  $(window).scroll(function(){
    if($(window).scrollTop()>50){
      $('.logo-text').slideUp(300);
    }
    else{
      $('.logo-text').slideDown(300);
    }
  })
  $("#myNavigator a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
  
    } // End if
  
  });
  function hidePortfolio (){
    $('#introImage').hide();
      $('#portfolio').hide();
  }
//   $(".nav-link").on("click", function(){
//     $(".navbar-nav").find(".active").removeClass("active");
//     $(this).addClass("active");
//     // if($(this).hasClass('services-link')){
//     //   hidePortfolio();
//     //   $('#contact').hide();
//     //   $('#about').hide();
//     //   $('#services').show();
//     // }
//     // else if($(this).hasClass('about-link')){
//     //   hidePortfolio();
//     //   $('#contact').hide();
//     //   $('#services').hide();
//     //   $('#about').show();
//     // }
//     // else if($(this).hasClass('contact-link')){
//     //   hidePortfolio();
//     //   $('#about').hide();
//     //   $('#services').hide();
//     //   $('#contact').show();
//     // }
//     // else{
//     //   $('#services').hide();
//     //   $('#contact').hide();
//     //   $('#about').hide();
//     //   $('#introImage').show();
//     //   $('#portfolio').show();
//     // }
//  });

$("a.galleryItem").click(function(e) {
  var magnificPopup = $.magnificPopup.instance; 
  /* Espera carregar o lightbox */
  $('#popup-carousel .carousel-inner').empty();
  for(var i=1 ; i< 7 ; i++) {
    $('<div class="carousel-item"><img class="d-block w-100" src="./images/thumbnails/' +i+ '.jpg">   </div>').appendTo('#popup-carousel .carousel-inner');
  }
  $('#popup-carousel .carousel-item').first().addClass('active');
  $('#popup-carousel').carousel();
  
  setTimeout(function() {
      /* Swipe para a esquerda - Próximo */
      $(".mfp-container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          console.log("swipe right");
          $('#popup-carousel').carousel("next");
        },

      /* Swipe para a direita - Anterior */
      swipeRight:function(event, direction, distance, duration, fingerCount) {
        console.log("swipe left");
        $('#popup-carousel').carousel("prev");
      },
      });
  }, 500);
});
})