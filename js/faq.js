$(function () {	
    $('.menu p').click(function(){
        // $(this).nextAll().show();
        $(this).nextAll().toggle();
        
    }).nextAll().hide();

    $('.menu p').click(function(){
        $(this).children('img').addClass('menu_bgc');
        $('.menu p').not(this).children('img').removeClass('menu_bgc');
    });
    

});			
