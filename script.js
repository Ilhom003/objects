// let person = {
//     name: 'Ilhomjon',
//     surName: 'Abdulahatov',
//     age:19
// }
// console.log(person);

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('doira');
//     }
// }

// function createCircle(radius) {
//   return {
//         radius,
//         draw(){
//             console.log('doira');
//         }
//     };


// }
// circle.draw()

// constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function(){
//         console.log('doira');
//     }
// }
// // const circle = new Circle(1)
// console.log(Circle.name,Circle.length,Circle.constructor);

// let a = 5;
// let b = a;
// a = 10;
// console.log(a, b);

// let x = { value: 10 }
// let y = x;
// x.value = 20;
// console.log(x,y);

// let number=1;
// function increasse(number){
//     number++;
//     console.log('inside',number);
// }
// increasse(number);
// console.log('outside',number);

const circle={
    radius:1,
    draw(){
        console.log('doira');
    }
}
// for (const key in circle) {
//     console.log(key);
// }
// if('radius' in circle) console.log('bor');

// const clone ={};
// for (const key in circle) {
//    clone[key]=circle[key]
// }

// let clone=Object.assign({}, circle)
const clone={...circle}
console.log(clone);