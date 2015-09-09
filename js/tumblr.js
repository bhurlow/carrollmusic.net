
var url = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=your-api-key"
var blogname = 'carrollmusic.tumblr.com'

var key = 'EGlOoHUyk05SSL1j94oSsMY9UeWHEoYAXErGW6siedUxDlCxlu'
var url = 'http://api.tumblr.com/v2/blog/' + blogname + '/posts?api_key=' + key + '&limit=30'

$.ajax({
  url: url,
  dataType: 'jsonp',
  success: function(posts){
    var data = parseTumblrRes(posts)
    appendImages(data)
  }
});

function appendImages(imgs) {
  images = imgs
  console.log(imgs.length)
  var rem = imgs.length % 4
  var toShow = imgs.splice(rem)
  toShow.forEach(function(src) {
    var clipper = $('<div>')
    clipper.addClass('clipper')
    var img = $('<img>')
    img.attr('src', src)
    clipper.append(img)
    $('#tumblr_images').append(clipper)
  })

}

function parseTumblrRes(data) {
  var images = []
  data.response.posts.forEach(function(post) {
    if (post.photos) {
      var src = post.photos[0].alt_sizes[1].url
      images.push(src)
    }
  })
  return images
}

