window.onload = function() {
	var em = document.querySelector('article > p'); // select the article's immediate child
	//em.style.color = 'red';
	var ems =document.querySelectorAll('body p') // all paragraph element (under body) -> 存成array
	ems[1].style.color = 'orange';
};