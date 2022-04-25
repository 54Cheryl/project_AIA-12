$(function(){
    $('#place').change(function(){
        let currPlace = $(this).val();
        
        if(currPlace == 'taipei'){
            $('.taipei').css('display','contents');
            $('.taipeiImg').css('display','contents');
            $('.btcImg').css('display','none');
        }else{
            $('.taipei').css('display','none');
            $('.taipeiImg').css('display','none');
            
        }
        
        if(currPlace == 'taichung'){
            $('.taichung').css('display','contents');
            $('.taichungImg').css('display','contents');
        }else{
            $('.taichung').css('display','none');
            $('.taichungImg').css('display','none');
        }

    });
    $("#new").click(function(){
        if($("#new").prop('checked')){
            $('.txt_new').addClass('first');
        }else{
            $('.txt_new').removeClass('first');
        }
    })
    $("#used").click(function(){
        if($("#used").prop('checked')){
            $('.txt_used').addClass('first');
        }else{
            $('.txt_used').removeClass('first');
        }
    })
    $("#service").click(function(){
        if($("#service").prop('checked')){
            $('.txt_service').addClass('first');
        }else{
            $('.txt_service').removeClass('first');
        }
    })
});