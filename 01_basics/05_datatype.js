// primitive datatype
// 7 types : string ,boolean, BigInt, Number,null, undefined,symbol

const score = 100
const scorevalue = 100.34

const IsloggedIn = false 
const ostemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 877482687343283n;



// reference (non-primitive)datatype
// Array,function,objects

const heros = ["vansh", "Naman" , "vanshu"]
let myObj = {
    name: "Tanish",
    age: 21,

}

const Myfunction = function(){
    console.log("hello World");
}
console.log(typeof Myfunction);
console.log(Myfunction());