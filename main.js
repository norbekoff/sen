
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

document.querySelectorAll('p').forEach(function(elem){
    elem.innerHTML = elem.innerHTML.replaceAll('ö', 'o`');
  });


// q = document.querySelector('p');
// q.innerHTML = q.innerHTML.replaceAll('s', 'o');

// document.querySelector('p').innerHTML = document.querySelector('p').innerHTML.replaceAll('S', 'q');

// let x = document.getElementsByTagName("p");
// x.innerHTML = x.innerHTML.replaceAll('S', 'o');