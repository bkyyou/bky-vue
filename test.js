// function fn(obj, key, val) {
//   val = 3;
//   console.log('a', a);
// }
// const a = {b: 1};

// for (const key in a) {
//   fn(a, key, a[key])
// }

// let obj = {};
// Object.defineProperty(obj, 'name', {
//   get(val) {
//     console.log('val', val);

//     return val;
//   },
//   set(val) {
//     console.log(3333);
//     console.log('val', val);
//     return val;
//   }
// })

// obj.name = 555;

// console.log('obj', JSON.stringify(obj));
// console.log('obj', obj.name);

const reg = /^(?!^)1(?=\d)1$/g;
// const reg = /\d/g;
// const reg2 = /(?!^)(?<!-)(?=(\d{3})+$)/g
const reg2 = /(?<!^)(?<!-)(?=(\d{3})+($|\.))(?<!\.\d*)/g

const str = '123456';
const reg1 = /(?=6)6$/

// hello

console.log('111.1111'.replace(reg2, ','));