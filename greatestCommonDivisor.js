function greatestCommonDivisor(num1, num2) {

    let smallerNum = num1;
    let gcd;

    if (num2 < num1) {
        smallerNum = num2;
    }

    for (let i = 1; i <= smallerNum; i++) {

        if (num1 % i == 0 && num2 % i == 0) {
            gcd = i;
        }
    }

    console.log(gcd);

}

greatestCommonDivisor(15, 5);
console.log('--------------------');
greatestCommonDivisor(2154, 458);