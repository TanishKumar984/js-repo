// Array

const myArr = [0, 2, 3, 4, 5];
const myHeors = ["tanish", "vansh", "vanshu"];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[0]);
console.log(myArr[3]);

console.log(myHeors[1]);
console.log(myArr2[2]);

// Array methods 

myArr.push(100);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(90);
myArr.shift();

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);