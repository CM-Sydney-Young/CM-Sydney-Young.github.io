window.onload = function(){
	var all_group_elm = document.getElementsByClassName('group_1'); //get element's' 回傳陣列的資料
	//var group_elm = all_group_elm[0];
	console.log(all_group_elm); //印出整個於元件
	console.log(group_elm.innerHTML);
	group_elm.innerHTML='Content Changed!';
	var id_elm = document.getElementById('num_6') // get element(單數) 找到僅有一個獨特的標籤
	id_elm.innerHTML = 'number 6 changed!';
	id_elm.style.color = 'red';//顏色設定為字串
	id_elm.backgroungColor = 'black';
	// font-size = fontSize, text-aligh = textAlign
	id_elm.style.marginLeft = '5px'; //當成字串
};