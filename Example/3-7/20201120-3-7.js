//actionCompleted();

function actionCompleted(){
	alert('completed');
} //function可先執行再建立

actionCompleted(); //呼叫執行

var actionCompletedAgain = function(){
	alert('completed Again!');
}//變數->function 先建立才能執行

actionCompletedAgain();

function popupMsg(msg){
	var finalMsg = 'Site Message:'+msg;
	alert(finalMsg);
}//呼叫popupMsg時接受的資料

//popupMsg('Test!');
//popupMsg('Warning!');

function userMsg(name, msg = 'nothing'){
	var finalMsg = name + ' says: '+msg;
	alert(finalMsg);
} //msg='' if沒有接受到資料的預設值

//userMsg('Victor','suprised');

//userMsg('Victor');

function complexCalc (x,y){
	var result = 0;
	result = x*y; //50
	result = result / (x-y); //-10
	result = result*y -x; //-10*10-5
	return result;
}

var finalResult = complexCalc(5,10);
alert(finalResult);
// alert(result); result定義在function裡面

var demoFuncs = {
	popupMsgFunc: popupMsg,
	userMsgFunc: userMsg,
	complexCalcFuncs: complexCalc
	//directFunc: function(){};
};

demoFuncs.userMsgFunc('Victor', 'I am calling a function in an object.');