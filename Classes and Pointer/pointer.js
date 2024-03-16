let num1 = 5;
let num2 = num1;

console.log(num1); // 5
console.log(num2); // 5

num1 = 7;
console.log(num1); // 7
console.log(num2); // 5
//num2 is not affected by the change in num1 because it is a copy of num1 and not a pointer,

//pointers are used to store the address of the variable,pointers can be achieved in javascript using the reference type objects
//where you set a variable to an object and then change the object's property, the variable will still point to the same object
//not the copy of the object like in the case of primitive types like number,string,boolean,null,undefined
// Example of reference type objects are arrays,functions,objects
let obj1 = { value: 5 };
let obj2 = obj1;

console.log(obj1); // {value : 5}
console.log(obj2); // {value : 5}
