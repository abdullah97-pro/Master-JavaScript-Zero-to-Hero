// // // // // // // // // // // // var name = 14;
// // // // // // // // // // // // var name = "Fanaven";

// // // // // // // // // // // // name = "Abdullah";

// // // // // // // // // // // // let x = 14;
// // // // // // // // // // // // // let x = 19;
// // // // // // // // // // // // x = 21;
// // // // // // // // // // // // {
// // // // // // // // // // // //     let x = 15;
// // // // // // // // // // // // }

// // // // // // // // // // // // let laptop = "Laptop";
// // // // // // // // // // // // laptop = "mini Laptop";

// // // // // // // // // // // // {
// // // // // // // // // // // //     let laptop = "Laptop";
// // // // // // // // // // // //     {
// // // // // // // // // // // // let laptop = "Laptop";
// // // // // // // // // // // // {
// // // // // // // // // // // // let laptop = "Laptop";

// // // // // // // // // // // // }
// // // // // // // // // // // //     }
// // // // // // // // // // // // }


// // // // // // // // // // // let x = 12;
// // // // // // // // // // // // let x = 15;
// // // // // // // // // // // x = 15;

// // // // // // // // // // // console.log(x);

// // // // // // // // // // // hoisting

// // // // // // // // // // // console.log(x);
// // // // // // // // // // // // let x = 12;
// // // // // // // // // // // const x = 12;

// // // // // // // // // // // "use strict";
// // // // // // // // // // // var x = 18; //global

// // // // // // // // // // // function show() {
// // // // // // // // // // //     console.log(x);
// // // // // // // // // // //     var y = 19; //local
// // // // // // // // // // //     console.log(y);
// // // // // // // // // // // }

// // // // // // // // // // // show()
// // // // // // // // // // // console.log(x);
// // // // // // // // // // // console.log(y);

// // // // // // // // // // let x = 12;
// // // // // // // // // // if (x == 12) {
// // // // // // // // // //     let y = 1;
// // // // // // // // // //     var z = 2;
// // // // // // // // // //     const pi = 3.14;
// // // // // // // // // //     console.log(y+z);
// // // // // // // // // // }

// // // // // // // // // // console.log(y);
// // // // // // // // // // console.log(pi);

// // // // // // // // // // const x = 12;
// // // // // // // // // // x = 45;

// // // // // // // // // const x = [1,2,3];
// // // // // // // // // x.push(4);
// // // // // // // // // console.log(x);

// // // // // // // // // // ❌ Insecure
// // // // // // // // // const userCode = "alert('Hacked!')";
// // // // // // // // // eval(userCode);  // Executes arbitrary code


// // // // // // // // // name = "Nihao";
// // // // // // // // // lname = "Nihao Maa";
// // // // // // // // // age = 21;
// // // // // // // // // msg = `Her name is ${name} ${lname}, she is ${age} years old.🤣`;
// // // // // // // // // console.log(msg);
// // // // // // // // // console.log(msg.length);
// // // // // // // // // console.log(msg.toUpperCase());
// // // // // // // // // console.log(msg.includes("🤣"));

// // // // // // // // // console.log("ab"*2);
// // // // // // // // // console.log(Math.sqrt(2500));
// // // // // // // // // console.log(Math.PI);
// // // // // // // // // console.log(Math.random());

// // // // // // // // // single = false;

// // // // // // // // // console.log("2" == 2);
// // // // // // // // // console.log("2" === 2);
// // // // // // // // // console.log(false == single);

// // // // // // // // // const id1 = Symbol("id");
// // // // // // // // // const id2 = Symbol("id");

// // // // // // // // // console.log(id1 === id2);

// // // // // // // // // let number = Number.MAX_SAFE_INTEGER;
// // // // // // // // // let num1 = 9007199254740999769769798n;
// // // // // // // // // let num2 = BigInt("9007199254740999769769798");

// // // // // // // // // console.log(number);
// // // // // // // // // console.log(num1);
// // // // // // // // // console.log(num2+20n);


// // // // // // // // const person = {
// // // // // // // //     name:"Usuf",
// // // // // // // //     age: 14,
// // // // // // // //     single: true,
// // // // // // // //     isStudent: true,
// // // // // // // // }

// // // // // // // // person.age = 15;

// // // // // // // // console.log(person.name);
// // // // // // // // console.log(person.age);


// // // // // // // const fruits = ["Apple","Banana","Graps"];

// // // // // // // // console.log(fruits);
// // // // // // // // console.log(fruits[0]);
// // // // // // // // console.log(fruits[1]);

// // // // // // // // push / pop / shift / unshift
// // // // // // // // console.log(fruits.push("Mango"));
// // // // // // // // console.log();
// // // // // // // // let x = fruits.pop();

// // // // // // // // console.log(fruits);
// // // // // // // // console.log(x);

// // // // // // // fruits.unshift("Watermelon");
// // // // // // // fruits.shift();
// // // // // // // fruits.shift();

// // // // // // // console.log(fruits);


// // // // // // // function greet() {
// // // // // // //     console.log("Hello");
// // // // // // // }

// // // // // // // greet();
// // // // // // // greet();

// // // // // // function greet() {
// // // // // //     return "Welcome to Datatype";
// // // // // // }

// // // // // // // document.writeln(greet());
// // // // // // // alert(greet())

// // // // // // // document.getElementById('demo').innerHTML = greet();


// // // // // // const square = function(x) { return x * x; };
// // // // // // console.log(square(5)); 

// // // // // let x = 12;
// // // // // let y = "Ali";
// // // // // let a = true;

// // // // // const person = {
// // // // //     name: "Ali"
// // // // // }

// // // // // const std = ["Ali","Bahara","Farid"];

// // // // // console.log(typeof x);
// // // // // console.log(typeof y);
// // // // // console.log(typeof a);

// // // // // console.log(typeof person);
// // // // // console.log(typeof std);

// // // // // console.log(std instanceof Array);
// // // // // console.log(person instanceof Object);
// // // // // console.log(Array.isArray(std));

// // // // let a = "5"+2;
// // // // let b = "10"-3;
// // // // let c = "5" * 2;
// // // // let d = true + 1;

// // // // console.log(typeof a);
// // // // console.log(typeof b);
// // // // console.log(typeof c);
// // // // console.log(d);

// // // if ("") console.log("true"); 
// // // else console.log("false"); 


// // let obj1 = { name: "Ali" };
// // let obj2 = obj1;
// // obj2.name = "Sara";
// // console.log(obj1.name); 
// // console.log(obj2.name);


// const sym = Symbol("id");
// let obj = { [sym]: 123 };
// console.log(obj[sym]); 




// operator -> + -
// operand -> 23 88 x y
// operation -> 23 + x , 24+1
// Ternary -> ?
// Nullish -> ??

// arithmatic + - * / % **

let x = 2;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(y % 2 == 0 ? "Even":"Odd");

