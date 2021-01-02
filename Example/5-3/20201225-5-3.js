$(document).ready(function(){
	$('nav > span').on('click',function(){
		var dsiplayed = $(this).siblings().eq(0).css('display') === 'block'; //判斷是否dsiplay
		if(dsiplayed){
			$(this).siblings().css('display','none');
		}
		else{
			$(this).siblings().css('display','block');
		}
	});
});