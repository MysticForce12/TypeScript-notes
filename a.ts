// Typescript code never runs in your browser. Your browser can only understand Javascript/
// Javascript is the runtime language (the thing that actually runs in the browser/nodejs runtime)
// Typescript is something that is transpiled (or compiled) into Javascript before it can run in the browser/nodejs runtime.
// When TS is compiled to Js, you get type checking(similar to c++). If there is an error, the conversion to javascript fails.
// TSC is the official TS compiler, which is used to convert TS code into JS code. You can install it globally using npm with the command `npm install -g typescript`.
// Typescript is a superset of Javascript, which means that all valid Javascript code is also valid Typescript code. However, Typescript adds additional features on top of Javascript, such as static typing, interfaces, and classes, which can help developers catch errors early and write more maintainable code.
// Typescript is designed to help developers write better code by providing features that are not available in Javascript. For example, static typing allows developers to catch type-related errors at compile time, which can help prevent bugs and improve code quality. Interfaces and classes can help developers organize their code and create reusable components.
// To use Typescript, you need to install the Typescript compiler (tsc) and set up a build process to transpile your Typescript code into Javascript. You can also use tools like Webpack or Babel to automate this process and make it easier to work with Typescript in larger projects.




// const x: number = 5;
// console.log(x);





// let y: number = 5;
// //y = 'hello';   // this will cause the following type error: Type 'string' is not assignable to type 'number'.
// console.log(y);





// function greetUser(name: string){
//     console.log("Hello " +name);
// }
// greetUser("Vikas");





// let z : any = 23;
// z = "hello"; // this is allowed because the type of z is any, which means it can hold any type of value.
// console.log(z);





// function doSomething(name: any){
//     console.log("Hello " +name);
// }
// doSomething("Vikas");




//Type inference is a feature of Typescript that allows the compiler to automatically determine the type of a variable based on its initial value. This means that you don't always have to explicitly specify the type of a variable, as the compiler can infer it for you. For example, if you declare a variable and assign it a number, the compiler will infer that the variable is of type number. However, if you want to be more explicit about the type of a variable, you can still specify it using type annotations. This can help improve code readability and make it easier for other developers to understand the intended use of the variable.
// let a = 5; // the type of a is inferred to be number

// function add(a : number, b : number){
//     return a + b;
// }
// console.log(add(5, 10)); // this will output 15
//console.log(add(5, "10")); // this will cause the following type error: Argument of type 'string' is not assignable to parameter of type 'number'.


//this version explicitly specifies the return type of the function to be a number and this is the recommended way to write functions in TS
// function add(a : number, b : number) : number{
//     return a + b;
// }
// console.log(add(5, 10));








// function islegalAge(age: number) : boolean{
//     if(age >= 18){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(islegalAge(20)); // this will output true
// console.log(islegalAge(15)); // this will output false







// function runAfterDelay(fncallback : () => void){   //fncallback is a function that takes no arguments and returns void 
//     setTimeout(fncallback, 2000);
// }

// runAfterDelay(function(){
//     console.log("This will run after 2 seconds");
// });








