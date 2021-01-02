window.onload = function () {
	let profile = {
		name:'CMY',
		age: 25,
		height: 160
	};

	for(var key in profile) {
		console.log(key);
		//console.log(profile);
		console.log(profile[key]); //根據變數的內容取得資料
		console.log(profile.key); //doesn't work
		console.log(profile.name); //profile裡面元素的值
	}
};