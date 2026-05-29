function saymyname(){
    console.log("tanish");
}
// saymyname();
// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }
function addTwoNumber(number1, number2){
    // let result = number1 +number2
    // return result;
    return number1+number2;
}

const result = addTwoNumber(3, 5);

// console.log("result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return ;
    }
    return `${username} just logged in` 
}
// console.log(loginUserMessage("tanish"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 800, 990))

const user = {
    username: "Tanish",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "vansh",
    price: 499
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));