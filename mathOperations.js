function mathOperations(num1, num2, opperator) {

    let result;

    switch (opperator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        case '%':
            result = num1 % num2;
            break;

        case '**':
            result = num1 ** num2;
            break;

    }

    console.log(result);

}

mathOperations(5, 6, '+');
console.log('-----------------');
mathOperations(3, 5.5, '*');