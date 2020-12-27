
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

