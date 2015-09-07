
$(slider)

function slider() {

  // animate w/ scroll
  // $(window).on('scroll', function(e) {
  //   $('#slider').css('background-position-y', '-' + window.scrollY + 'px') 
  // })

  var posY = 0;
  setInterval(function() {
    posY += 50
    $('#slider').css('background-position-y', '-' + posY + 'px') 
    // $('#slider').css('background-position-x', '-' + posY + 'px') 
  }, 750)

}

