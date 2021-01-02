function mouseEventMsg(){
	alert('Mouse event!');

};

window.onload = function (){
	var em =document.querySelector('body');
	em.addEventListener('click', function(){
		alert('Clicked!!');
	}); //'偵測的事件', 執行的動作function
	em.addEventListener('mouseenter', mouseEventMsg); // call back function 先建立好function
	em.addEventListener('mouseleave', mouseEventMsg);
	em.removeEventListener('mouseleave');
};