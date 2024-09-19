function sameNumbers(number) {

    let numAsString = number + '';
    let sum = Number(numAsString[0]);
    let areSame = true;

    for (let i = 1; i < numAsString.length; i++) {
        if (numAsString[i] != numAsString[i - 1]) {
            areSame = false
        }
        sum += Number(numAsString[i]);
    }

    console.log(areSame);
    console.log(sum);

}

sameNumbers(2222222);
console.log('-----------------');
sameNumbers(1234);