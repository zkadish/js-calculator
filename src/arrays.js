const newArray = [
    {key: 'value'},
    [1,2,3],
    'string',
    1000,
    function fn () { return 'fn'; }
];

let arrayTwo = [1,2,3,4,5];

arrayTwo.forEach(function(ele, i, array){
    // console.log(ele, i, array)
})

let value = arrayTwo.reduce(function(acc, val) {
    // console.log(acc, val)
    return acc + val;
}, 0);

// console.log(value);

// let mappedArray = arrayTwo.map((e, i, a) => {
//     return e + 10;
// }).filter((ma) => {
//     return ma > 12;
// })

// console.log('testing webpack')



