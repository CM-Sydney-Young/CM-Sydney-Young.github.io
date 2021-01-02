// window

var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

console.log(winWidth+'/'+ winHeight);

window.onload = function(){
	//alert('Website is ready!');
	//window.document
	var website_title = window.document.title; //讀取website html檔名
	console.log(website_title)
	var another_title = document.title;//簡短版本 document window裡面的doc
	console.log(another_title);
};