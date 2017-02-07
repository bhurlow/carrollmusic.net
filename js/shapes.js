
function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCoords() {
  var w = $('#stage').width()
  var h = $('#stage').height()

  let x = rand(10, w - 120)
  let y = rand(10, h - 120)

  return [x, y]
}

function randColor() {
  var r = Math.random() >= 0.5
  return r 
    ? '#D95447'
    : '#E6AC27'
}

function chance() {
  return Math.random() >= 0.3
}

function addSvg(path) {

  var stage = $('#stage')
  $.get(path, function(res) {

    var c = res
    var svg = res.children[0]
    var coords = randomCoords()

    var wrap  = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var trs = 'translate(' + coords[0] + ',' + coords[1] + ')'
    g.setAttribute('transform', trs)



    wrap.setAttribute('transform', 'scale(2, 2)')
    wrap.appendChild(g)


    var p = svg.querySelector('path')

    if (chance()) {
      p.style.fill = randColor()
    }
    else {
      p.style.fill = 'none'
      p.style.stroke = randColor()
    }

    p.setAttribute('transform', 'scale(0.5, 0.5)')

    g.appendChild(p)
    stage.append(g)
  })

}


$(window).ready(function() {
  var names = []
  // for (x = 1; x <= 1; x++) {
  //   var path = '/img/lp2_art/' + x + '.svg'
  //   addSvg(path)
  // }
  for (x = 1; x <= 7; x++) {
    var path = '/img/lp2_art/' + x + '.svg'
    addSvg(path)
  }
})

