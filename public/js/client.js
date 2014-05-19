

$(function() {

  $('.signup').on('submit', function(e) {

    e.preventDefault()

    var data = $(this).serializeArray()
    var email = data[0].value
    console.log(email)
    if (email) post(email)

    $(this).find('input[type=email]').val('')
    var submit = $(this).find('input[type=submit]')
    submit.val('thnx!')
    console.log(submit)

  })

}) 

function post(str) {

  var data = { email: str }

  $.post('/signup', data)
  .done(function(data) {
    console.log(data)
  });

}




