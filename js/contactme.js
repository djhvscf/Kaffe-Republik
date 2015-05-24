var submitForm = function () {
    var $form = $('#contactme');

    var data = {
        "key": "4comTGdVVGlpgkNv8ps9dQ",
        "message": {
            "html": "w",
            "text": $('#message').val(),
            "subject": "Information",
            "from_email": $('#email').val(),
            "from_name": $('#name').val(),
            "autotext": "true",
            "to": [
                {
                    "email": "djhv92@hotmail.com",
                    "name": "Carlos Arias - Kaffe Republik",
                    "type": "to"
                }
            ]
        }
	};

	$.post($form.attr('action'), data, null, 'json').done(function() {
		console.log('Success');
		//noty({text: 'You email has been sent!', layout: 'topLeft', type:'information', timeout: 4000});
	})
	.fail(function() {
        console.log('Error');
		//noty({text: 'You email has not been sent, an error ocurred while sending. Try again!!', layout: 'topRight', type:'error', timeout: 5000});
	});
};