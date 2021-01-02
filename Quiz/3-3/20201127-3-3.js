/*function reset_bg(){
	var em = document.getElementByClassName('item');
	em[0].style.backgroundColor = 'red';
	em[1].style.backgroundColor = 'blue';
	em[2].style.backgroundColor = 'orange';
}*/

function change_bg_1(){
	//reset_bg();
	//var em = document.querySelectorAll('body div');
	var em = document.getElementsByClassName('item')
	em[0].style.backgroundColor = 'blue';
	em[1].style.backgroundColor = 'red';
}

function change_bg_2(){
	var em = document.getElementsByClassName('item');
	em[1].style.backgroundColor = 'orange';
	em[2].style.backgroundColor = 'red';
}


window.onload = function(){
	var em = document.getElementById('switch1');
	em.addEventListener('click', change_bg_1);
	em = document.getElementById('switch2');
	em.addEventListener('click', change_bg_2);
}