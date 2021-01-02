function change_bg(){
	var button_id = this.id;
	var divs = document.getElementsByTagName('div');
	for (var index = 0; index < divs.length; index++){
		var div = divs[index]; 
		if (div.id === button_id +'_div'){
			div.style.backgroundColor = 'green';
			break; //提前停止 不用執行多餘的迴圈
		}
	}
};

window.onload = function (){
	var buttons = document.getElementsByTagName('button');
	for (var index = 0; index < buttons.length; index++){
		var button = buttons[index];
		button.addEventListener('click',change_bg);
	}
};