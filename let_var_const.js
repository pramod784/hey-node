// var a;
// console.log(a);
// a = 5;
// console.log(a);

// let b;
// console.log(b);
// b = 10;
// console.log(b);

// const c = 15;
// console.log(c);
// c = 20;



const user = { 
    name: "John Doe",
    role: "Developer"
};

//console.log(user);

//const user1 = {...user};
const user1 = user;
user1.name = "Pramod Kumar";
console.log(user1);
console.log(user);