const name = "Tanish"
const repoCnt = 20

console.log(`Hello my name is ${name} and my rep count is ${repoCnt}`);


const gameName = new String('Tanish')

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,1)
console.log(anotherString)