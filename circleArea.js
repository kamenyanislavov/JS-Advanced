function circleArea(input) {

    let inputType = typeof input;    

    if (inputType == 'number') {

        let radius = input;
        let area = Math.PI * radius * radius;

        console.log(area.toFixed(2));


    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}

circleArea(5);
console.log('--------------');
circleArea('name');