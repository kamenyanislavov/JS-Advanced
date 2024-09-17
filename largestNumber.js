function largestNum(num1, num2, num3) {

    let numbers = [num1, num2, num3];
    numbers.sort((a, b) => b - a);

    console.log(`The largest number is ${numbers[0]}.`);

}

largestNum(5, -3, 16);
console.log('----------');
largestNum(-3, -5, -22.5);