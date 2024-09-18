function squareOfStars(param) {

    let el = '* ';

    if (!param) {
        param = 5;
    }

    for (let i = 1; i <= param; i++) {
        console.log(el.repeat(param));
    }

}

squareOfStars(1);
console.log('------------------');
squareOfStars(2);
console.log('-------------------');
squareOfStars(5);
console.log('--------------------');
squareOfStars(7);
console.log('---------------------');
squareOfStars();