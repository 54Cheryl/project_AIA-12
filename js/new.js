$(function () {
    let divWidth = $('#sliderBoard').width();//1200px
    let imgCount = $('#content li').length;//8 25%
    let imgCountList = $('#content ul').length;//2
    // alert(imgCount)

    $('#content').width(divWidth * imgCountList);   // ul 的寬度
    $('#content ul').width(divWidth);           // 移動 的寬度

    for(let i = 0; i < imgCountList; i++){
        $('#contentButton').append(`<li></li>`);
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    let index;
    $('#contentButton li').click(function(){
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });

});


