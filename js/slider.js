
$(slider)

var posY = 0;
var sliding = true;

window.addEventListener('focus', function() {
  sliding = true;
});

window.addEventListener('blur', function() {
  sliding = false;
});

function slider() {

  // animate w/ scroll
  // $(window).on('scroll', function(e) {
  //   $('#slider').css('background-position-y', '-' + window.scrollY + 'px') 
  // })

  slide()
  setInterval(slide, 2000)

}

function slide() {
  if (sliding) {
    posY += 50
    $('#banner').css('background-position-y', '-' + posY + 'px') 
  }
}
