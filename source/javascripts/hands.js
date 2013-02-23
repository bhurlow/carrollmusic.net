

var hand_piece1 = document.getElementById('hand_piece1')
var hand_piece2 = document.getElementById('hand_piece2')
var hand_piece3 = document.getElementById('hand_piece3')
var hand_piece4 = document.getElementById('hand_piece4')


window.X = hand_piece1

var hp1 = {}
hp1.end = hand_piece1.offsetTop
hp1.start = 0
hp1.pos = hp1.start


// hand piece 1 wants to go from starting at about top: 20 to top: 2199, which comes out to be 2179px total travel distance
// this means that its 'speed' to reach the end point at the bottom is speed = .726


window.onload = function() {
	console.log('window load')
	hand_piece1.style.top = 0 + 'px'
	hand_piece2.style.top = 400 + 'px'
	hand_piece3.style.top = 800 + 'px'
	// hand_piece1.style.webkitTransform = 'translate(0,30px)'
}




function result(x, inMin, inMax, outMin, outMax) {
    return ((outMax-outMin) * (x - inMin) / (inMax - inMin)) + outMin;
}

var windowHeight = $(window).height()

window.onscroll = function(e){
	
	// console.log('scroll', scrollY)
	// Hand 1
	var res1 = result(this.scrollY, 0, 2300, 0, 2199)
	var newPos1 = Math.floor(res1)
	if (newPos1 >= 1760) newPos1 = 1760
	hand_piece1.style.webkitTransform = 'translate(0,' + newPos1 + 'px)'
	
	// Hand 2 2380
	var res2 = result(this.scrollY, 0, 2800, 0, 2380)
	var newPos2 = Math.floor(res2)
	if (newPos2 >= 1545) newPos2 = 1545
	hand_piece2.style.webkitTransform = 'translate(0,' + newPos2 + 'px)'
	
	// Hand 3 2380
	var res3 = result(this.scrollY, 0, 2800, 0, 2300)
	var newPos3 = Math.floor(res3)
	if (newPos3 >= 1480) newPos3 = 1480
	hand_piece3.style.webkitTransform = 'translate(0,' + newPos3 + 'px)'
	
	
	
	// var itemPosition = (hand_piece1.style.top).replace('px', '')
	// console.log('item position', itemPosition)
	// 
	// var distanceRemaining = 2199 - this.scrollY
	// console.log('distanceRemaining', distanceRemaining)
	// 
	// var speed = (distanceRemaining / this.scrollY)
	// console.log('speed', speed)
	// // console.log(this.scrollY)
	// // console.log('item pos', itemPosition)
	// var newPos = itemPosition + speed
	// console.log('newPos', newPos)
	// hand_piece1.style.top = newPos + 'px'
	// hand_piece1.style.top = newPos + 'px'
	// hand_piece1.style.webkitTransform = 'translate(0,' + newPos + 'px)'
	
}


/*

function newPos(x, windowHeight, pos, adjuster, inertia){
	return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
}

// console.log(this.scrollY)
// var distance = Math.floor(result(this.scrollY, 0, 2200, 20, 2179))
// hp1.pos += 10 // scroll distance divided by hand distance travel (this should be an equation)

*/