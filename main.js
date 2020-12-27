
alert("Bu Maqola so'kinish va haqoratlarga to'la, agar siz qiz bola bo'lsangiz bu maqola siz uchun emas, iltimos saytdan chiqib keting.")


$('#test').change(function(){
    if($(this).not(":checked")) {
        $('.hidden').addClass('changeme');
    } 
});

$('#test').change(function(){
    if($(this).is(":checked")) {
        $('.hidden').removeClass('changeme');
    } else {
        $('.hidden').addClass('changeme');
    }
});

