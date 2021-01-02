var name = 'CM Young';
var age = 24;
var affiliation = 'NTHU CHE';

var profile = {
	name: 'CM Young',
	age:24,
	affiliation:"NTHU CHE",
	height: 160,
	wieght:40,
	contact:{
		home: 886424260692,
		mobile:[123456789,987654321,123412345]
	}
}; //物件 ex 取得profile->name資料 物件整合資料(文字+數字)

console.log(profile.name);
console.log(profile['name']);

profile.gender ='female';

console.log(profile.gender);

console.log(profile.contact.home);

console.log(profile.contact.mobile[1]);

console.log(name.length);//字元長度 js變數陣列->物件

console.log(profile.contact.mobile.length);