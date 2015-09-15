
$(slider)

var posY = 0;

function slider() {

  // animate w/ scroll
  // $(window).on('scroll', function(e) {
  //   $('#slider').css('background-position-y', '-' + window.scrollY + 'px') 
  // })

  slide()
  setInterval(slide, 2000)

}

function slide() {
  posY += 50
  $('#banner').css('background-position-y', '-' + posY + 'px') 
}
