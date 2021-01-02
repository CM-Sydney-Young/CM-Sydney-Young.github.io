function reset_bg(){
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
	em = document.getElementById('item4');
	em.style.backgroundColor = 'red';
}

function change_bg(){
	reset_bg();
	var em_id = this.id; //this 被點到的元件的ID
	var em = document.getElementById(em_id);
	em.style.backgroundColor = 'blue';
	// this.style.backgroundColor = 'blue';
}

window.onload = function(){
	var em = document.getElementById('item1');
	em.addEventListener('click', change_bg);
	em = document.getElementById('item2');
	em.addEventListener('click', change_bg);
	em = document.getElementById('item3');
	em.addEventListener('click', change_bg);
	em = document.getElementById('item4');
	em.addEventListener('click', change_bg);
};