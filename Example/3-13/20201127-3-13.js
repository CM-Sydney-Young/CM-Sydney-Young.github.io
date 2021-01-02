function reset_bg(){
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
};

function change_bg_1 (){
	reset_bg(); //還原成原本的顏色 click之後再去改變成其他顏色
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'blue';
};

function change_bg_2 (){
	reset_bg();
	var em = document.getElementById('item2');
	em.style.backgroundColor = 'blue';
};

function change_bg_3 (){
	reset_bg();
	var em = document.getElementById('item3');
	em.style.backgroundColor = 'blue';
};

function change_bg_4 (){
	reset_bg();
	var em = document.getElementById('item4');
	em.style.backgroundColor = 'blue';
};

window.onload = function(){
	var em = document.getElementById('item1');
	em.addEventListener('click', change_bg_1);
	em = document.getElementById('item2');
	em.addEventListener('click', change_bg_2);
	em = document.getElementById('item3');
	em.addEventListener('click', change_bg_3);
	em = document.getElementById('item4');
	em.addEventListener('click', change_bg_4);
};