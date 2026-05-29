const user = {
    username : "Tanish",
    price: 999,
    
    WelcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "Vanshu";
// user.WelcomeMessage();


// console.log(this);

// function chai(){
//     console.log(this);
// }


// chai();

// const chai = function (){
//     let username = "Tanish"
//     console.log(this.username);

// }
// // output is undefined
// chai();

const chai = () => {
    let username = "Tanish"
    console.log(this);

}
// output : arrow function mai bhi output undefined aata h 
// chai();
//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }

//  const addTwo = (num1, num2) => num1 + num2
 
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ( {username: "tanish"} )

console.log(addTwo(4,6));
