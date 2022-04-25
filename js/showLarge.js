$(function(){
    $('.productModel_menu').click(function(){
        // alert('ok')
        $(this).addClass('light_model');
        $('.productModel_menu').not(this).removeClass('light_model');
        var idd = $(this).attr('id');
        $('.modelList').each(function(){
            var ulidd = $(this).attr('id');
            if(idd == ulidd){
                $(this).css('display','contents');
            }else{
                $(this).css('display','none');
            }
        });
    });
});
$(function(){
    $('.one_model').click(function(){
        let a = '小孩的完美保姆';
        let b = 'AZ110';
        let c = '照護';
        let d = '料理';
        // alert(ab);
        $('.product_maintag').text(a);
        $('.productModel').text(b);
        $('.tag_first span').text(c);
        $('.tag_last span').text(d);
    });
});
$(function(){
    $('.two_model').click(function(){
        let a = '符合手作的需要';
        let b = 'NC200';
        let c = '設計';
        let d = '手工';
        // alert(ab);
        $('.product_maintag').text(a);
        $('.productModel').text(b);
        $('.tag_first span').text(c);
        $('.tag_last span').text(d);
    });
});
$(function(){
    $('.three_model').click(function(){
        let a = '家中的護理師';
        let b = 'SD600';
        let c = '照護';
        let d = '醫療';
        // alert(ab);
        $('.product_maintag').text(a);
        $('.productModel').text(b);
        $('.tag_first span').text(c);
        $('.tag_last span').text(d);
    });
});
$(function(){
    $('.four_model').click(function(){
        let a = '私人主廚!';
        let b = 'SK700';
        let c = '料理';
        let d = '營養';
        // alert(ab);
        $('.product_maintag').text(a);
        $('.productModel').text(b);
        $('.tag_first span').text(c);
        $('.tag_last span').text(d);
    });
});


function showLarge(e){
    document.getElementById("large").src = e.target.src;
}
function init(){
    let imgs = document.querySelectorAll(".productModel_menu img");
    for(let i=0; i<imgs.length; i++){
        imgs[i].onclick = showLarge;
    }
}
window.addEventListener("load",init,false);