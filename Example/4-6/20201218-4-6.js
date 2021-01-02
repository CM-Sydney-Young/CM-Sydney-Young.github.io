$(document).ready(function(){
	$('nav > div > div:first-of-type').on('click', function(){
		$('nav > div > div:not(:first-of-type)').css('display','none');
		$(this).siblings('div').css('display','block'); //siblings ->同一個階層的其他元件
	});
});