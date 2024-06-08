// function max(x, y) {
//     if (x > y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(max(12, 97));

//  ************ Clean 1 *************
// function max(x, y) {
//     if (x > y) return x;
//     return y;
// }
// console.log(max(12, 88));

//  ************ Clean 2 *************
// function max(x, y) {
//     return x > y ? x : y;
// }
// console.log(max(72, 45));

//  ************ Clean 3 Arrow Function *************

const max = (x, y) => x > y ? x : y;
console.log(max(2, 45));
