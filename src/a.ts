// // Typescript code never runs in your browser. Your browser can only understand Javascript/
// // Javascript is the runtime language (the thing that actually runs in the browser/nodejs runtime)
// // Typescript is something that is transpiled (or compiled) into Javascript before it can run in the browser/nodejs runtime.
// // When TS is compiled to Js, you get type checking(similar to c++). If there is an error, the conversion to javascript fails.
// // TSC is the official TS compiler, which is used to convert TS code into JS code. You can install it globally using npm with the command `npm install -g typescript`.
// // Typescript is a superset of Javascript, which means that all valid Javascript code is also valid Typescript code. However, Typescript adds additional features on top of Javascript, such as static typing, interfaces, and classes, which can help developers catch errors early and write more maintainable code.
// // Typescript is designed to help developers write better code by providing features that are not available in Javascript. For example, static typing allows developers to catch type-related errors at compile time, which can help prevent bugs and improve code quality. Interfaces and classes can help developers organize their code and create reusable components.
// // To use Typescript, you need to install the Typescript compiler (tsc) and set up a build process to transpile your Typescript code into Javascript. You can also use tools like Webpack or Babel to automate this process and make it easier to work with Typescript in larger projects.




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




// //Type inference is a feature of Typescript that allows the compiler to automatically determine the type of a variable based on its initial value. This means that you don't always have to explicitly specify the type of a variable, as the compiler can infer it for you. For example, if you declare a variable and assign it a number, the compiler will infer that the variable is of type number. However, if you want to be more explicit about the type of a variable, you can still specify it using type annotations. This can help improve code readability and make it easier for other developers to understand the intended use of the variable.
// let a = 5; // the type of a is inferred to be number

// function add(a : number, b : number){
//     return a + b;
// }
// console.log(add(5, 10)); // this will output 15
// console.log(add(5, "10")); // this will cause the following type error: Argument of type 'string' is not assignable to parameter of type 'number'.


// //this version explicitly specifies the return type of the function to be a number and this is the recommended way to write functions in TS
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







// //INTERFACE
// //Interfaces in Typescript are a powerful way to define the shape of an object. They allow you to specify the properties and methods that an object should have, as well as their types. This can help improve code readability and make it easier to catch errors at compile time. For example, you can define an interface for a user object that has properties like name, age, and email, and then use that interface to create objects that conform to that shape. Interfaces can also be used to define the structure of classes and functions, making it easier to work with complex data structures and APIs.

// //code without interface
// function printUserName(user: {name: string, age: number, email: string}){
//     console.log("Name: " + user.name);
// }
// function printUserAge(user: {name: string, age: number, email: string}){
//     console.log("Age: " + user.age);
// }

// //as we can see, the above code is repetitive and not very maintainable. If we want to change the structure of the user object, we would have to change it in multiple places. This is where interfaces come in handy.




// //code with interface

// interface User {
//     name: string;
//     age: number;
//     email?: string;          // the ? after email means that this property is optional, which means that an object of type User can have an email property, but it is not required. This allows for more flexibility when creating objects of type User, as you can choose to include the email property or not without causing a type error.
// }

// function printUserName(user: User){
//     console.log("Name: " + user.name);
// }

// function printUserAge(user: User){
//     console.log("Age: " + user.age);
// }

// let person1 :User = {                 //This is for stricter type checking, you can explicitly type the object:User This helps catch mistakes early, like missing fields or wrong types.
//     name: "Vikas",
//     age: 20,
//     email: "vikas@gmail.com"
// }

// printUserName(person1); // this will output "Name: Vikas"
// printUserAge(person1); // this will output "Age: 20"






// //Interfaces can also be used to define the structure of classes and functions. For example, you can define an interface for a class that represents a shape, and then implement that interface in different classes that represent specific shapes like circles and rectangles. This allows you to create a consistent API for working with different types of shapes, while still allowing for flexibility in how those shapes are implemented. Similarly, you can define an interface for a function that takes certain parameters and returns a specific type, which can help ensure that your code is more predictable and easier to debug. Overall, interfaces are a powerful tool in Typescript that can help improve code organization, readability, and maintainability.

// interface Person {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// let employee1 = new Employee("Vikas", 20);
// employee1.greet("Hello"); // this will output "Hello Vikas"











// //TYPES
// //Types in Typescript are a way to define the shape of data and the behavior of functions. They allow you to specify the types of variables, function parameters, and return values, which can help catch errors at compile time and improve code readability. Types can be primitive types like string, number, and boolean, or they can be more complex types like arrays, objects, and functions. You can also create your own custom types using interfaces and type aliases. By using types in your code, you can make it easier to understand what kind of data is being used and how it should be manipulated, which can lead to more maintainable and less error-prone code.
// //They are similar to interfaces, but they can also be used to define union types, intersection types, and mapped types, which can provide even more flexibility when working with complex data structures. Overall, types are a fundamental part of Typescript that can help improve the quality and maintainability of your code.

// //1 Union
// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101);     // ID: 101
// printId("202");   // ID: 202




// //2 Intersection
// interface BusinessPartner {
//   name: string;
//   credit: number;
// }

// interface Identity {
//   id: number;
//   name: string;
// }

// type Employee = Identity & BusinessPartner;

// let employee: Employee = {
//   id: 101,
//   name: "Vikas",
//   credit: 1000
// };

// console.log(employee); // { id: 101, name: 'Vikas', credit: 1000 }










// //ARRAYS in TS
// function printNumbers(arr: number[]){
//   arr.forEach(num => console.log(num));
// }

// printNumbers([1,2,3])






// //Given a list of users, filter out the users who are above the age of 18 and return their names in an array.

// interface User {
//   name: string;
//   age: number;
// }

// function filterAdultUsers(users: User[]): string[] {
//   return users
//     .filter(user => user.age > 18)
//     .map(user => user.name);
// }

// const users: User[] = [
//   { name: "Vikas", age: 20 },
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 25 }
// ];

// const adultUserNames = filterAdultUsers(users);
// console.log(adultUserNames); // Output: ["Vikas", "Bob"]












// //ENUMS
// //Enums are used to store fixed constant values.
// //They improve: readability, maintainability and avoid hardcoded strings
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let move: Direction = Direction.Up;

// console.log(move); // 0
// // By default, enums in Typescript are assigned numeric values starting from 0. In this example, Direction.Up is assigned the value 0, Direction.Down is assigned the value 1, Direction.Left is assigned the value 2, and Direction.Right is assigned the value 3. You can also assign specific values to enum members if you want to use different values or if you want to start from a different number. Enums can be useful for representing a set of related constants, such as directions, colors, or status codes, and can help improve code readability and maintainability.







// //String Enum
// enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST"
// }

// let currentRole: Role = Role.Admin;

// console.log(currentRole); // "ADMIN"
// // In this example, we have defined a string enum called Role with three members: Admin, User, and Guest. Each member is assigned a string value that represents the role. When we assign Role.Admin to the variable currentRole, it holds the string value "ADMIN". String enums can be particularly useful when you want to have more descriptive values for your constants, making your code easier to read and understand.









// //TUPLES
// //Tuples are fixed-length arrays with fixed types.
// let user: [string, number];
// user = ["Vikas", 20];
// console.log(user[0]); // Vikas










// //GENERICS
// //Generics are a powerful feature in Typescript that allow you to create reusable components that can work with different types of data. They enable you to write functions, classes, and interfaces that can operate on a variety of types while still maintaining type safety. By using generics, you can create more flexible and reusable code, as you can define a function or class that can work with any type without sacrificing type checking. This can help improve code maintainability and reduce the likelihood of errors, as you can catch type-related issues at compile time rather than at runtime.

// //without generics
// function identity(arg: number): number {
//   return arg;
// }

// //with generics
// function identity<T>(arg: T): T {     //T means some type that will be decided later
//   return arg;
// }

// console.log(identity<number>(10));
// console.log(identity<string>("Hello"));




// //Generic Arrays
// function getFirstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }

// console.log(getFirstElement<number>([1,2,3]));
// console.log(getFirstElement<string>(["a","b"]));







// // READONLY MODIFIER
// // You can use the `readonly` keyword to mark properties that cannot be changed after the object is created. This is great for preventing accidental mutations.
// interface Car {
//     readonly brand: string;
//     year: number;
// }

// let myCar: Car = { brand: "Toyota", year: 2023 };
// myCar.year = 2024; // Valid
// // myCar.brand = "Ford"; // Error: Cannot assign to 'brand' because it is a read-only property.

// // You can also use ReadonlyArray to prevent array mutations
// const numbers: ReadonlyArray<number> = [1, 2, 3];
// // numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.








// // TYPE ASSERTIONS
// // Sometimes you have information about the type of a value that TypeScript can't know about. Type assertions allow you to override the compiler's inferred type using the 'as' keyword.
// // Example: Selecting an element from the DOM
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// // Now TypeScript knows myCanvas isn't just a generic HTMLElement, but specifically a Canvas, giving you access to canvas-specific methods.







// // LITERAL TYPES
// // Literal types allow you to specify the exact value a string, number, or boolean must have. They are extremely powerful when combined with Union types.
// type Status = "success" | "loading" | "error";

// let currentStatus: Status;
// currentStatus = "loading"; // Valid
// // currentStatus = "pending"; // Error: Type '"pending"' is not assignable to type 'Status'.

// // TYPE GUARDS (NARROWING)
// // Type narrowing is the process of moving a less precise type to a more precise type using logic like `typeof` or `instanceof`.
// function printLength(val: string | number) {
//     if (typeof val === "string") {
//         console.log(val.length); // TS knows 'val' is definitively a string here, so .length is valid.
//     } else {
//         console.log(val.toFixed(2)); // TS knows 'val' MUST be a number here.
//     }
// }









// // UNKNOWN AND NEVER 
// // 'unknown' is a safer version of 'any'. It allows you to store any value, but you cannot perform operations on it or assign it to a specifically typed variable until you perform a type check (Type Narrowing).
// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Vikas";

// // userName = userInput; // This causes an error! TS won't let you assign 'unknown' to 'string'.

// // We must check the type first:
// if (typeof userInput === "string") {
//     userName = userInput; // Now it works, because TS knows it is a string here.
// }

// // 'never' represents a type of value that never occurs. It's often used for functions that always throw an error or have an infinite loop.
// function throwError(message: string): never {
//     throw new Error(message);
// }









// // UTILITY TYPES
// // TypeScript provides several built-in utility types to facilitate common type transformations.
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// }

// // 1. Partial<T>: Makes all properties in T optional.
// function updateTodo(todoToUpdate: Partial<Todo>) {
//     // You can pass an object with just { title: "New Title" } instead of the whole object
// }

// // 2. Pick<T, K>: Constructs a type by picking the set of properties K from T.
// type TodoPreview = Pick<Todo, "title" | "completed">;
// // TodoPreview now only has 'title' and 'completed'.

// // 3. Omit<T, K>: Constructs a type by picking all properties from T and then removing K.
// type TodoWithoutDesc = Omit<Todo, "description">;
// // TodoWithoutDesc has everything EXCEPT 'description'.