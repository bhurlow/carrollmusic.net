

function randomCoords() {
  var w = $('#stage').width()
  var h = $('#stage').height()
  let x = Math.floor(Math.random() * (w + 1)) - 50
  let y = Math.floor(Math.random() * (h + 1)) - 50
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

    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var trs = 'translate(' + coords[0] + ',' + coords[1] + ')'

    g.setAttribute('transform', trs)

    var p = svg.querySelector('path')

    if (chance()) {
      p.style.fill = randColor()
    }
    else {
      p.style.fill = 'none'
      p.style.stroke = randColor()
    }
    p.transform = "translate(50,80)" 

    g.appendChild(p)
    stage.append(g)
  })

}


$(window).ready(function() {
  var names = []
  for (x = 1; x <= 7; x++) {
    var path = '/img/lp2_art/' + x + '.svg'
    addSvg(path)
  }
})

