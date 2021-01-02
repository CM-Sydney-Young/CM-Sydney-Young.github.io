function change (){
	var button_id = this.id;
	var imgs = document.getElementsByTagName('img');
	for (var index = 0; index < imgs.length; index++){
		var img = imgs[index]; 
		if (img.id === button_id){
			img.style.top = '-20px';
			img.style.opacity = '1'; 
		}

		else{
			img.style.opacity = '0.5';
			img.style.top = '0';
		}
	}
}

window.onload = function(){
	var buttons = document.getElementsByTagName('button');
		for (var index = 0; index < buttons.length; index++){
			var button = buttons[index];
			button.addEventListener('click',change);
		}
}