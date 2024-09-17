function stringsLengthAndAverage(str1, str2, str3) {

    let lengthsSum = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(lengthsSum / 3);
    
    console.log(lengthsSum);
    console.log(averageLength);
    
    
}

stringsLengthAndAverage('chocolate', 'ice cream', 'cake');
console.log('------------------');
stringsLengthAndAverage('pasta', '5', '22.3');