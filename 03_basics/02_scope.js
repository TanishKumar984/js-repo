if(true){
   let a = 10
   const b = 20
   var c = 30 
// console.log("inner:", a);
}
let a = 2200


//  console.log(a);
// console.log(b);
// /console.log(c);

function one(){
    const username = "Tanish"
    function two(){
        const website = "Youtube"
        // console.log(username);
        // console.log(website);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username = "tanish"
    if(username === "tanish"){
        const website = " youtube"
        // console.log(username + website);
    }
}

// +++++++++++++ interesting +++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


// addtwo(5)
const addtwo = function(num){
    return num + 2
}

