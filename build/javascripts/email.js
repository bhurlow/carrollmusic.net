/*

Script to manage email submissions

*/




$(function($) {

	var db_url = 'http://localhost:5984/sandbox';

	var input = $('.input_email');
	var btn_submit = $('.email_submit');
	btn_submit.click(function() {
		var val = input.val();
		var isEmail = validateEmail(val)
		if(isEmail) sendEmail(val)
		input.val('thanks!');
	})

	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	function sendEmail(email_string) {

		$.ajax({
			url: db_url,
			method: "POST",
			data: {
				"item": email_string
			}
		});

	}

	})
;
