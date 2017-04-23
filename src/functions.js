import loops from './loops';
import arrays from './arrays';
// import './ternary';
import './objects';
// import './class';
// console.log('index.js loaded!');

// let result = 0;
// const addition = (x, y) => {
//     this.x = x;
//     this.y = y;
//     console.log(this);
// }

function outterFn () {
    // console.log(this)
    
    this.anotherFn = function () {
        //this...?
        // console.log(this)
    }
    
    let innerFn = () => {
        //this === outterFn's this
        // console.log(this)
    }
    
    this.anotherFn();
    innerFn();
}

const newOutterFn = new outterFn();
newOutterFn.anotherFn();




// this code is awesome!
// let newAddFn = new addition(1, 4);
// console.log(newAddFn.x);

// newAddFn.z = 10;
// console.log(newAddFn);


