// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "20090142070";
tinderUser.name = "Tanish Kumar";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"tanish",
            lastname:"Kumar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser);
const obj1 = {
    1: "A",
    2: "B"
}
const obj2 = {
    3: "A",
    4: "B"
}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "a@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js padho",
    price: "999",
    courseInstructor: "hitesh sir"
}
const {courseInstructor} = course

console.log(courseInstructor);
