// singleton
// Object.create

// object literals
  
const mySym = Symbol("key1");

const Jsuser = {
    name: "Tanish",
    "Full name": "Tanish Kumar",
    age: 21,
    location: "New Delhi",
    email:"tanish123@gamil.com",
    isLoggedIn: false,
    [mySym]:"mykey1"
}
// console.log(Jsuser["name"])
// console.log(Jsuser["email"]);
// console.log(Jsuser.location);
// console.log(Jsuser["Full name"]);
// console.log(typeof(Jsuser[mySym]));

Jsuser.age = 22
// Object.freeze(Jsuser);

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingtwo = function(){
    console.log(`hello Js user, ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());