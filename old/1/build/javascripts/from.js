
var $thing = $('.thing')

// var previous_scroll_position = 
//  t: current time, 
//  b: begInnIng value,
//  c: change In value, 
//  d: duration

// 'time' is scrolling
var t = 0;
// beggining offset
var b = 0;
// difference between current
var c = $(window).width()
var d = $(window).height()


var move;

var easeOutQuad = function (x, t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
}

$(window).scroll(function() {
  t = $(window).scrollTop()
  c++
  // console.log(t)
  move = easeOutQuad(1, t, b, c, d)
  // console.log(move)
  $thing.css( '-webkit-transform',  'translate(' + move +  'px,100px)'  );
})
;
