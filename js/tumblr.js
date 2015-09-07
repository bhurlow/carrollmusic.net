
var url = "http://api.tumblr.com/v2/blog/blog.tumblr.com/info?api_key=your-api-key"
var blogname = 'carrollmusic.tumblr.com'

var key = 'EGlOoHUyk05SSL1j94oSsMY9UeWHEoYAXErGW6siedUxDlCxlu'
var url = 'http://api.tumblr.com/v2/blog/' + blogname + '/posts?api_key=' + key + '?limit=40'

$.ajax({
  url: url,
  dataType: 'jsonp',
  success: function(posts){
    var data = parseTumblrRes(posts)
    appendImages(data)
  }
});

function appendImages(imgs) {
  imgs.forEach(function(src) {
    var img = $('<img>')
    img.attr('src', src)
    $('#tumblr_images').append(img)
  })

}

function parseTumblrRes(data) {
  var images = []
  console.log(data.response.posts.length)
  data.response.posts.forEach(function(post) {
    console.log(post)
    // images.push(post.thumbnail_url)
    if (post.photos) {
      var src = post.photos[0].alt_sizes[3].url
      images.push(src)
    }
  })
  return images
}

