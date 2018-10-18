$('.get-started-btn').click(function () {
    $('html, body').animate(
        {
            scrollTop: $('#mid').offset().top
        }
        , 'slow');
});