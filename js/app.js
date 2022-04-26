$(Document).ready(function(){
    $('.eye').mousedown(function(){
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        $(this).prev().attr('type','text');

    });
    $('.eye').mouseup(function(){
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        $(this).prev().attr('type', 'password');
    });     
});
$(Document).ready(function(){
    $('.sign-in-up').click(function(){
        console.log("hello")
        $('.warrper').toggleClass('warrper-hidden');
        // $(this).parent('.warrper').toggleClass('warrper-hidden');
    });
});

