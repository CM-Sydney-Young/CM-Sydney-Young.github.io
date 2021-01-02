$(document).ready(function(){
	$('nav > div').on('click', function(){
		var display = $(this).children().eq(0).css('display'); // immediate child
		if (display === 'none'){
			$('nav > div > div').css('display','none'); //不是點到的那個收起來
			$(this).children('div').css('display','block');
		}
		else{
			$(this).children('div').css('display','none');
		}
	});//收合的功能
});