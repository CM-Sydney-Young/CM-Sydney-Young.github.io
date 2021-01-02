window.onload = function(){
	var all_divs = document.getElementsByTagName('div'); //div -> tag name
	console.log(all_divs[0]);
	var all_audios = document.getElementsByTagName('audio'); //沒有這個元件->空的陣列-> undefined
	console.log(all_audios[0]);
}; //確保網頁讀取完成在run JS

