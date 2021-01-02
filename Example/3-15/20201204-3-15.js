function changeBg (){
	var button_id = this.id; //取得點選那個觸發event按鍵的ID if click button 1 -> take button 1 ID = block1 -> button_id = block1
	var target = document.getElementById(button_id +'_div'); //取得所有ID與觸發event一樣的 take button_id + '_div' -> target = block1_div
	console.log(target);
	/*if (target) {
		if(button_id === 'block1'){
		target.style.backgroundColor ='yellow';
		}

		else if (button_id === 'block2'){
		target.style.backgroundColor ='orange';
		}
		
		else{
		target.style.backgroundColor ='green';
		}
	}

	else{
		alert('No element found'+button_id+'_div')
	} // null or undifine*/

	if(!target){
		alert('No element found'+button_id+'_div');
	}

	else{
		/*if(button_id === 'block1'){
		target.style.backgroundColor ='yellow';
		}

		else if (button_id === 'block2'){
		target.style.backgroundColor ='orange';
		}
		
		else{
		target.style.backgroundColor ='green';
		}*/
		if (button_id === 'block1'|| button_id === 'block2') {
			target.style.backgroundColor = 'yellow';
		} // or=|| and=&& ex. A || (B && C)
		else {
			target.style.backgroundColor = 'green';
	
};

window.onload=function(){
	//let condition = 5 > 4; //二元 布林函數 true
	// let condition = 4 > 5; //false
	// <,<=,>=,!=, ==
	//let condition = 5 == 5; // true == 兩邊data型態不一定要一樣
	//let condition = '5' == 5; //true 字串轉數字
	//let condition = 5 === 5; //true 沒有資料類型轉換用原始的型態 資料類型要相同 -> 通常使用
	//let condition = '5'=== 5; //false
	//let condition = '5' !== 5; //true 考慮類型 
	/*if(condition){
		console.log('true');
	}
	else{
		console.log('false');
	} // optional*/
	var buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click',changeBg);
	buttons[1].addEventListener('click',changeBg);
	buttons[2].addEventListener('click',changeBg);
	buttons[3].addEventListener('click',changeBg);

};