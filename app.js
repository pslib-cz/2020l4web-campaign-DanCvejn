// Menu opener

$('.opener').click(function(){
    $('.menu').toggleClass('open');
})


// Buy now

$('.silly').click(function(){
    $('.alert').addClass('alert-on');
    setTimeout(function(){
        $('.alert').removeClass('alert-on');
    }, 3000);
})

