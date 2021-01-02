var num1 = 2+5, num2 = 1-5*40; // 先運算 再呈現結果

console.log(num1, num2);

var num3 = num1 + num2;
console.log(num3);

var str = 'A number:';
console.log(str + num3); //數字+字串->字串

var test1 = 'value:' +5+10; //510字串
var test2 = 'value:' +5*10; //if 乘號 -> 運算
var test3 = 'value:' +5-10; //NaN 字串不能做運算
console.log(test1, test2, test3);

var numAsNum = 5, numAsStr='5';
console.log(numAsNum + numAsStr); // =55
console.log(numAsNum - numAsStr); // =0 轉成數字

var str1 = 'This is a value.', str2 = 'value';
console.log(str1 - str2); //NaN

