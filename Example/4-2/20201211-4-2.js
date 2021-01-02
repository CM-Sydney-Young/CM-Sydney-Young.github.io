$(document).ready(function() {
	/*document.querySelectorAll('body > button')[0].addEventListener('click',function(){
		alert('Button 1 clicked!')
	});*/ // 跟jQuery差不多


	$('body > button').eq(0).on('click', function(){
		alert('Button 1 clicked!')
		//$(this).off(); // take away all the event listener
		$(this).off('click');
	});

	$('body > button').eq(1).on('click', function(){
		alert('Button 2 clicked!')
	});
}); // ~window.onload 讀取檔案