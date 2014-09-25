$(window).load(function() {

    $('img[data-url]').each(function() {
        img = this;
        url = $(this).data('url');
        $.getJSON('https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=' + url + '&screenshot=true', function(data) {
            data = data.screenshot.data.replace(/_/g, '/').replace(/-/g, '+');
            img.src = 'data:image/jpeg;base64,' + data;
        });
    });


});