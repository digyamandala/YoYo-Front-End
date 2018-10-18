var isNotExpanded = true;

$(window).resize(function () {
    if ($(window).width() > 500) {
        $('ul.item').css('display', 'block');
    }
    else {
        $('ul.item').css('display', 'none');
        $('#expand-collapse').html("<strong>+</strong>");
        isNotExpanded = true;

        $('.dropbtn').click(function(){
            $('.dropcont').toggleClass('display-block');
        });
    }

});

$('.expand').click(function () {

    $('.item').slideToggle(500);

    if (isNotExpanded) {
        $('#expand-collapse').html("<strong>--</strong>")
        isNotExpanded = false;
    }
    else {
        $('#expand-collapse').html("<strong>+</strong>")
        isNotExpanded = true;
    }
});

