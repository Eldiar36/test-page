$(document).ready(function(){
    $(".gallery-slider").owlCarousel({
        items: 4,
        loop:true,
        nav:true,
        dots:true,
        navText:true,
        margin:17,
        responsive: {
            0:{
                items: 1
            },
            480:{
                items:2
            },
            767:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
})
jQuery(document).ready(function($) {
    $('.iframe-youtube').magnificPopup({
        type: 'iframe',
        height: "100vh",

    });
});

$('.advantages-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
        {
            breakpoint:1024,
            settings: "unslick"
        },
        {
            breakpoint:1300,
           settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
           }
        }
    ]
});
new WOW().init();
/*
$(document).ready(function(){
    $(".advantages-slider").owlCarousel({
        items: 3,
        loop:true,
        nav:true,
        dots:true,
        navText:true,
        margin:20,
        responsive: {
            0:{
                    rewind: false,
                    callbacks: false
            },
            480:{
                items:1
            },

            991:{
                items:2
            },
            1350:{
                items:3
            }
        }
    });
});
*/

$(document).ready(function(){
    $(".lot-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:true,
        dots:true,
        navText:true,
    });
});
$(".phone-inp").mask("+7 (999) 999-99-99");
$('form.inner-form').find('input.inp').attr('required','required');
$('form.recept-form').find('input[type=checkbox]').attr('style','display:block;position:absolute;opacity:0').attr('name','policy').attr('required',true).on('change',
    function() {
        if (!$(this).prop('checked')) {
            this.setCustomValidity('Подтвердите согласие');
        }
        else {
            this.setCustomValidity('');
        }
    }
);
$('form.recept-form, form.inner-form, form.fast-action__item').submit(function(e){
    var $form = $(this);
    e.preventDefault();
    var $button = $form.find('button[type=submit]');
    $button.prop('disabled',true);
    $.ajax({
        url:'/send/',
        type:'POST',
        dataType:'json',
        data: {uname:$form.find("input[type='text']").eq(0).val(),uphone:$form.find("input[type='text']").eq(1).val(),
            object:$form.hasClass('inner-form')?$form.parents('.inner-cont').siblings('.main-title_inner').text():$form.hasClass('fast-action__item')?$form.find('.fast-action__top_desc').text():''},
        beforeSend: function(jqXHR, settings) {
        },
        error:function(){
            $button.prop('disabled',false)
        },
        success:function(resp){
            if(!resp.errors){
                yaCounter57225472.reachGoal('ORDER');
                $form[0].reset();
                swal({
                    type: 'success',
                    title: 'Благодарим Вас!',
                    text: 'Мы свяжемся с Вами в ближайшее время',
                    showConfirmButton: false,
                    timer: 2000
                }).then(function(){$button.prop('disabled',false)});
            }
        }
    });
});
var obj = [];
document.querySelector("body > div.container.inner-container.wow.fadeIn > div.inner-cont > form > ul > li:nth-child(2) > div.inner-form__wrap > button")