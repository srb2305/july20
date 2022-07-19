$('#btn1').on('click',function(){
	$('.div1').hide(500);
});

$('#btn2').on('click',function(){
	$('.div1').show();
});

$('#btn3').on('click',function(){
	$('.div1').toggle(1000);
});

$('#btn4').on('click',function(){
	$('.div1').fadeOut(1500);
});

$('#btn5').on('click',function(){
	$('.div1').fadeIn(1500);
});


$('#btn6').on('click',function(){
	$('.div1').css({'background':'blue', 'color':'black','font-size':'500px' }  );
});

$('#btn7').on('click',function(){
	$('.div1').addClass('div2');
});

$('#btn8').on('click',function(){
	$('.div1').addClass('div2');
	$('.div2').removeClass('div1');
});