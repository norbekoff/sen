// $('input:checkbox').change(function(){
//     if($(this).is(":checked")) {
//         $('span').addClass("hidden");
//     } else {
//         $('span.hidden').removeClass("hidden");
//     }
// });
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




// $('#test').change(function(){
//     if($(this).is(":checked")) {
//         $('.hidden').addClass('hidden2');
//     }  