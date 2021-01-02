$(document).ready(function(){
	$('button').eq(0).on('click', function(){
		$('div').removeClass('selected')
		$('div:nth-child(odd)').addClass('selected');
	});

	$('button:nth-of-type(2)').on('click', function(){
		$('div').css('height','50px');
		$('div').css('width','50px');
		$('div:nth-child(even)').css('height','60px'); 
		$('div:nth-child(even)').css('width','60px');
	});
	
	$('button:nth-of-type(3)').on('click', function(){
		$('div').css('height','50px');
		$('div').css('width','50px');
	});
});