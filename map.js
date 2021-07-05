//Implementation-1
// const age = [2,3,4,5];
// age.map(function(element,index,array){  // to find out element,index,array from an array
//     console.log(element,index,array);
// })

// Implementation-2
// const age = [2,3,4,5];
// const square = age.map(function (element) {  //with anonymous function
//     return element*element;
// })
// console.log(square);

//Implementation-3
// const age = [2,3,4,5];
// const square = age.map (function square(element) {
//     return element*element;
// })
// console.log(square);

//Implementation-4
// const age = [2,3,4,5];
// const result = age.map(element => element*element);
// console.log(result);

//Implementation-5
const age = [2,3,4,5];
const result = age.map(x=>x*x);
console.log(result);