// suppose you have to need above 5 then I use for loop following way--->
// const age = [2,3,4,5,6,7,8,9];
// const storage = [];
// for (let i = 0; i < age.length; i++) {
//     const element = age[i];
//     if (element > 5){
//         console.log(element);
//     }
//     else {
//         ////
//     }
// }
//Another way to find above 5 and it's the short way--->
const age = [2,3,4,5,6,7,8,9];
const result = age.filter(x=> x>5);
console.log(result);
