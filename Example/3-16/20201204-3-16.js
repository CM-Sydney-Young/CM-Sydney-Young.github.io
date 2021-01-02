function change_all_bgs (){
	var targets = document.getElementsByTagName('div');
	// target 0 1 2 (沒有三) < target.length 3 (三筆資料)
	for(var index = 0; index < targets.length; index++){
		var div = targets[index];
		if(div.id !== 'no_change'){
			div.style.backgroundColor ='green';
		}
	} 
}

window.onload = function(){
	/*for(loop variable; loop condition; loop action){

	}*/
	//counter++ counter = counter+1
	/*for(var counter = 1; counter <=10; counter++){
		 console.log(counter);
	}*/

	/*for (var counter = 1; counter <=10; counter--){
		console.log(counter) // 無限迴圈
	}*/

	/*var counterB = 100;
	for (var counter = 1; counterB <= 100; counter++){

	}//不會執行*/

	var button = document.getElementById('change_all');
	button.addEventListener('click',change_all_bgs);

};