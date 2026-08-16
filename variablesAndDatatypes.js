// console.log("Arman Sharma");
// age = 24;
// console.log(age+1);
// name="Arman Sharma";
// console.log(name);
// price=99.44;
// console.log(price);
// rules
// js is case sensitive. a & A have different meaning
// only letter (_) and $ are allowed
// reserved word cannot used in name of varibles 

// Let const var
// var can be re declared & updated. A global scope varibales.("as a good programer we cannot use var because after 2015 js new standard come 
// called es6 and let and const keywords is used ");
// let variables cannot be re decalred but can be updated. A block scope variable
// const variables cannot be re declared or updated . A block scope variables

let name = "tony  stark";
console.log(name);
let totalprice=1000;
console.log(totalprice);
totalprice = 100;
console.log(totalprice);

// const is used for constant like thing that cannot Change
// it is mainly used for mathematical function
const pi =3.14;
console.log(pi);

// datatypes in js
// string int null Boolean undefined  etc all are primitves
let salary = 5000;
console.log(salary);
console.log(typeof salary); // gives the type of salary.

let fullname="Arman sharma";
console.log(typeof fullname);

let js=true;
console.log(typeof js);

let x=null;
console.log(typeof x);

let a;
console.log(typeof a);

// onject is a collection of value . object can store key value pair. object can be declared with const keyword.
const student={
    Name :"arman sharma",
    age:20,
    isPass:true,
    cgpa:8.5
}
student.Name="Aditya Thakur";
console.log(student.name);
console.log(student);
console.log(student["cgpa"]);
console.log(typeof student);


// question
const product={
    name : "ct ball pen",
    price : 270,
    rating : 4.5,
    offer : .05,
    isdeal:true
}
console.log(product);