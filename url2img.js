$(window).load(function() {

    $('img[data-url]').each(function() {
        $.ajax({
        	url: 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + $(this).data('url') + '&screenshot=true',
        	context: this,
        	type: 'GET',
        	dataType: 'json',
        	success: function(data) {
           		data = data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
            	$(this).attr('src', 'data:image/jpeg;base64,' + data);
            }
        });
    });


});