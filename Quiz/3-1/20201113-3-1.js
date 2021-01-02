var longArray = [78, 12, 5, 6, 19, 67, 1, -56, 10];

longArray[2] = 100;
longArray[6] = 1000;
console.log(longArray);
//replace the third and 7th value with 100 and 1000 respectively


console.log(longArray[0]*longArray[1]*longArray[6]);
// calculate the pdt of the 1st, 2nd and 7th value

console.log(longArray[8]/longArray[0]/longArray[1]/longArray[2]);
// devide the last value by the first three values