function agregateElements(array) {

    let sum = 0;
    let sumOfInverse = 0;
    let concat = '';

    for (let i = 0; i < array.length; i++) {

        sum += array[i];
        sumOfInverse += 1 / array[i];
        concat += ''+ array[i];
    }

    console.log(sum);
    console.log(sumOfInverse);
    console.log(concat);
    

}

agregateElements([1, 2, 3]);
console.log('--------------------');
agregateElements([2, 4, 8, 16]);