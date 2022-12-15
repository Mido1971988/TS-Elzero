//---------------------difference between Statically typed language and Dynamically Typed Language----------------------
/*
[1] Statically typed language > (Rust , C , C++)
    Variables Type are Static , once Declared you can not change it
    Do Type Checking at Compile-Time
    Better Performance at Run-Time because no need to check Types Dynamically (Error Detected earlier)

[2] Dynamically Typed Language > (PHP, Python, JS)
    Variable Type is Dynamic , you can change it any time
    Type Checking at Excution-Time (Error can be detected after Excution)
*/

// let num = 10;
// num = "Elzero" // Error Type 'String' is not assignable to type 'number'

// let age = 40;
// if(age > 30) {
//     console.log("Good")
// }else{
//     // repeat is string method not number method
//     // will detect the Error before run the Code and even if age > 30 and will not excute this line of code
//     console.log(age.repeat(3)) 
// }


/*
    -------------------------------------Type Annotations || Signature------------------------------------
    -- Indicate The Data Type Of Variables
    -- Indicate The Data Type Of Functions Input/Output
    -- Objects, etc.

    - Why We Use It ?
    - Is It Mandatory ? 
    - What Happen If We Didnt Use It ?
*/

// let theName = "Elzero"; // if you declare variable without writing it's type but you assigned it to a value => type will be considered type of it's value
// let theAge: number = 40;
// let hire: boolean = true;
// let all: any = "Elzero Web School";
// let allVars; // if you declare variable without writing it's type or a value => type will be considered (any)
// theName = "Osama";
// all = 100;


// in JS 
// function add(n1, n2) {
//     return n1 + n2;
// }
// console.log(add(10, 20)); //30
// console.log(add(10, "20")); // 1020
// console.log(typeof add(10, 20));

// in TS
// function add(n1: number, n2: number) { // you should write type of Function input (parameters)
//     return n1 + n2;
// }
// console.log(add(10, 20)); //30
// // console.log(add(10, "20")); // Error
// console.log(typeof add(10, 20));

// -------------------------------------Type Annotations With Arrays-------------------------------


// let all: (string | number | boolean) = "Osama";

// all = "A";
// all = 100;
// all = true;

// let myFriends = ["Osama", "Ahmed", "Sayed", 10]; // Error with repeat myFriends (string | number )[] => means array of strings and number (considered automatically from values)
// let myFriends: string[] = ["Osama", "Ahmed", "Sayed", 10]; // Error with 10 because we wrote string[] => means array of strings only
// let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i].repeat(3));
// }

// -------------------------------Type Annotations With mutliDimensional Arrays-------------------------

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];
// let arrayFive: (string | number | (string | number)[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D", 5 , 6 ], true, false];


// -------------------------------Type Annotations With Functions-----------------------------
/*
=> in tsconfig.json file : 
- noImplicitAny = true ; Default Enable error reporting for expressions and declarations with an implied 'any' type.
- noImplicitAny = false ; will not give you an Error

- noImplicitReturns
    --- Will Check All Code Paths In A Function To Ensure They Return A Value

- noUnusedLocals
    --- Report Errors On Unused Local Variables

- noUnusedParameters
    --- Report Errors On Unused Parameters In Functions.
*/

// let showMsg = true;

// function showDetails(name: string, age: number, salary: number) : string { // last :string => means function should return string
//     let test = 10;
//     if (showMsg) {
//         return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
//     }
//     return `No Data To Show`;
// }

// console.log(showDetails("Osama", 40, 5000));

// -------------------------------Optional and Default Parameters-----------------------
/*
- In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
- "?" Optional Parameter
*/

// in JS
// function showData(name = "Unknown", age, country = "Unknown") {
//     return `${name} - ${age} - ${country}`;
// }
// // you can write only 2 arguments of 3 parameters without any Errors
// console.log(showData("Osama", 40)); 
// // you can skip an argument by adding undefinded
// console.log(showData(undefined, 40 , "Egypt")); // will return unknown - 40 - Egypt


// in TS
// you can write only 2 arguments of 3 parameters but you have to add default parameter or optional parameter

//[1] Default Parameter
// function showData(name: string = "Unknown", age: number, country: string = "Unknown") {
//     return `${name} - ${age} - ${country}`;
// }
// console.log(showData("Osama", 40));

//[2] Optional Parameter
// function showData(name?: string, age?: number, country?: string) {
//     return `${name} - ${age} - ${country}`;
// }

// console.log(showData("Osama", 40));

// Note : Required Parameter can not be after optional parameter
/*
showData(name?: string, age?: number, country?: string) => OK
showData(name?: string, age: number, country?: string) => not OK (age Required parameter can not be after name optional parameter 
*/

// -------------------------------Function Rest Parameter-----------------------
// Float => All (float or int) Is Under Type Number


// function addAll(...nums: number[]) : number {
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) {
//         result += nums[i];
//     }
//     // nums.forEach((num) => result += num);
//     return result;
// }

// console.log(addAll(10, 20, 30, 100, 10.5, +true));

// ---------------------------Function Anonymous Function and Arrow Function-------------

// const add = function(num1: number, num2: number) : number {
//     return num1 + num2;
// }

// console.log(add(10, 20));

// const addWithArrow = (num1: number, num2: number) : number => num1 + num2;

// console.log(addWithArrow(10, 20));

// ---------------Assignments from lesson 1 to 11-----------

// assignment 1 : 
/*
in tsconfig File : 
"rootDir": "./project/files/typescript/"
"outDir": "./dist/compiled/javascript/"
"sourceMap": true
*/

// assignment 2 :
// function calculate(numOne : number, numTwo : number) {
//     return numOne + numTwo;
// }

// console.log(calculate(10, 20)); // 30
// console.log(calculate("10", "20")); // We Don't Need This To Work
// console.log(calculate(+true, +true)); // 2

// assignment 3 :
// function printInfo(valueOne : (string | number), valueTwo : (string | number)) {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
// }

// console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
// console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// assignment 4 :

// let arr: (number | boolean[] | (string | (string | number)[])[])[];
// let arr1: (any | any[] | (any | (any)[])[])[];

// assignment 5 :
// function reportErrors(username:string, age: number) { //noUnusedParameters in tsconfig file to give you an error of unused param
//     let rank = "Professor"; //noUnusedLocals in tsconfig file to give you an error of unused variable
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here"); // "allowUnreachableCode": false,  in tsconfig to give you an Error of unreachable code after return statment
// }
// console.log(reportErrors("Elzero", 40));

// assignment 6 :
// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c:string) {
//     return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing,nothing,theName)); // Elzero

// assignment 7 :
// function showMsg(user?: string, age?: (number | string), country?: string) {
//     return `${user}${age}${country}`;
// }

// console.log(showMsg());
// console.log(showMsg("Elzero"));
// console.log(showMsg("Elzero", 40));
// console.log(showMsg("Elzero", "40", "Egypt"));

// assignment 8 : 
// Write The Function Here
// function printInConsole(...diffArr : (number | string | boolean)[]){
//     let result :string = "";
//     diffArr.forEach(ele => result += `The Value Is ${ele} And Type Is ${typeof ele}\n`)
//     return result += "Done"
// }
// // Using The Function => Do Not Edit
// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// Output
/* 
The Value Is 1 And Type Is number
The Value Is 2 And Type Is number
The Value Is 3 And Type Is number
The Value Is 4 And Type Is number
The Value Is 5 And Type Is number
Done
The Value Is A And Type Is string
The Value Is B And Type Is string
The Value Is C And Type Is string
Done
The Value Is true And Type Is boolean
The Value Is false And Type Is boolean
The Value Is false And Type Is boolean
The Value Is true And Type Is boolean
The Value Is true And Type Is boolean
Done
*/

// ---------------------------------Data Types- Type Alias----------------------------

// type st = string;
// let theName: st = "Elzero";
// theName = "Osama";

// type standnum = string | number;
// let all: standnum = 10;
// all = 100;
// all = "Osama";

// ---------------------------------Advanced Type Alias----------------------------

// type Buttons = {
//     up: string,
//     right: string,
//     down: string,
//     left: string
// }

// type Last = Buttons & {
//     x: boolean
// }

// function getActions(btns: Last) {
//     console.log(`Action For Button Up Is ${btns.up}`);
//     console.log(`Action For Button Right Is ${btns.right}`);
//     console.log(`Action For Button Down Is ${btns.down}`);
//     console.log(`Action For Button Left Is ${btns.left}`);
// }

// // properties of object should be the same name inside type annotation of Buttons or Last
// getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });


// ---------------------------------Literal Types----------------------------
// // you can write type of specific number or string not only writing type (string | number | boolean )
// let ten : 10 = 10; // ok
// let nine : 9 = 10; // Error

// // you can write what function can return ... here function compare allowed to return only 0 , 1, -1 and we used type alias to give it a name (nums)

// type nums = 0 | 1 | -1; // type alias

// function compare(num1: number, num2: number) : nums { 
//     if (num1 === num2) {
//         return 0;
//     } else if (num1 > num2) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// let myNumber: nums = 1;

// -------------------------------------------------Tuple------------------------------------
/*
    Data Types
    - Tuple
    --- Is Another Sort Of Array Type
    --- We knows Exactly How Many Elements It Contains
    --- We Knows Which Types It Contains At Specific Positions
*/

// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// // article.push(100); // will not work if readonly
// console.log(article);

// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);

// -------------------------------------------------Void------------------------------------
/*
    Data Types
    - Void
    --- Function That Will Return Nothing 
    --- Function In JavaScript That Not Return A Value Will Show undefined
    --- undefined is not void
    ** if you write return; will match void 
    ** if you write return undefined; will match void if written in function - if you did not write : void TS will considered it as : undefined

    - Never
    --- Return Type Never Returns
    --- The Function Doesn't Have A Normal Completion
    --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
    ** TS automatically defect the Error or infinte Loop inside Function Expressions not Function Declerations and give it automatically : never
    ** if TS automatically give the function : never you can write return but will be unreachable Code
    ** if you write : never manually you can not write return and will give you an Error
*/

// function logging(msg: string) : void {
//     console.log(msg);
//     return ; 
//     // return undefined;
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//     throw new Error(msg);
//     // return 10; // unreachable Code
// }

// const alwaysLog = function (name: string){ // TS see it as : Never 
//     while(true) {
//         console.log(name);
//     }
//     // return 10; // 2 Errors => [1]unreachable Code [2]type number is not assigned to type never
// }
// function alwaysLog2 (name: string) : never{ // TS see it as : Void
//     while(true) {
//         console.log(name);
//     }
//     // return 10; // 2 Errors => [1]unreachable Code [2]type number is not assigned to type never
// }

// alwaysLog("Osama");
// // console.log("Test"); //unreachable Code because alwaysLog is a function of while loop

// --------------------------------------Enumerations-----------------------------------------------
/*
    Data Types
    - Enums => Enumerations
    --- Allow Us To Declare A Set Of Named Constants
    --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
    --- It Organize Your Code
    --- By Default Enums Are Number-Based, First Element Is 0
    --- Theres A Numeric Enums
    --- Theres A String-Based Enums
    --- Theres Heterogeneous Enums [String + Number]
*/

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// if you did not give it values it will start from 0 (kid) => 1 (easy) => 2 (medium) => 3 (hard)
// enum Level {
//     Kids ,
//     Easy,
//     Medium,
//     Hard
// }

// enum Level {
//     Kids = 15,
//     Easy = 9,
//     Medium = 6,
//     Hard = 3
// }
// // Level.Easy = 12; // Error because it's read only property (enum is group of const and you can not reassign const)

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//     console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// }


// --------------------------------------Enumerations Part 2-----------------------------------------------

/*
Data Types
- Enums => Enumerations
--- Enum Can Refer To Other Enum
--- Enum Can Refer To Same Enum
--- Enum Can Have Calculations
--- Enum Can Have Functions
*/

// function getHardSeconds() : number {
// return 3;
// }

// // if you write const enum kid => will not show in JS File but if you need it to show in JS File add "preserveConstEnums": true in tsconfig File
// enum Kids {
// Five = 25,
// Seven = 20,
// Ten = 15
// }

// enum Level {
//     first, // you can add enum without value at the top
//     Kid = Kids.Ten, // Enum Can Refer To Other Enum
//     Easy = 9,
//     Medium = Easy - 3, // Enum Can Refer To Same Enum and Enum Can Have Calculations
//     Hard = getHardSeconds(),
//     // last, // you can not add enum without value after enums with values
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
// console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
// }

// ------------------------------------Type Assertions---------------------------
/*
    Data Types
    - Type Assertions
    --- Sometime Compiler Doesnt Know The Information We Do
    --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// // let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);


// let data: any = 1000;
// // here you told TS that 1000 is string and TS believes you and will not give you an Error when you add .repeat function on it but will give you an Error when you run the JS File
// console.log((data as string).repeat(3));

// ------------------------------------Union And Intersection Type---------------------------

/*
    Data Types
    - Union And Intersection Types
    --- Union Type
    ------ The | Symbol Is Used To Create The Union => "Or"

    --- Intersection Type
    ------ Is A Type That Combines Several Types Into One
    ------ The & Symbol Is Used To Create An Intersection => "And"

    --- If A Union Is An OR, Then An Intersection Is An AND.
*/

// let all: number | string = 100;

// type A = {
//     one: string,
//     two: number,
//     three: boolean
// }

// type B = A & {
//     four: number
// }

// type C = {
//     five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//     console.log(`Hello ${btns.one}`);
//     console.log(`Hello ${btns.two}`);
//     console.log(`Hello ${btns.three}`);
//     console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });


// ------------------------------------Type Annotations With Object---------------------------

// let myObject: {
//     readonly username: string,
//     id: number,
//     hire?: boolean,
//     skills: {
//         one: string,
//         two: string
//     }
// } = {
//     username: "Elzero",
//     id: 100,
//     hire: true,
//     skills: {
//         one: "HTML",
//         two: "CSS"
//     }
// };

// // myObject.username = "Osama";
// myObject.id = 101;
// myObject.hire = false;

// console.log(myObject.username);
// console.log(myObject.id);
// console.log(myObject.hire);
// console.log(myObject.skills.one);

// ------------------------------Assignments from lesson 12 to 21-----------------------

// assignment 1 

// // Write Your Code Here
// type n  = number;
// // Do Not Edit Here
// let myData: n;
// myData = 1000; // No Problem Here
// myData = +true; // No Problem Here

// assignment 2

// // Write Your Code Here
// type mix = number | boolean;
// // Do Not Edit Here
// let myInfo: mix;
// myInfo = 1000; // No Problem Here
// myInfo = true; // No Problem Here

// assignment 3

// // Write Your Code Here
// type Info = {
//     theName : string,
//     theAge : number
// }
// type Full = Info & {
//     country : string
// }
// // Do Not Edit Here
// function showInfo(data: Info) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
// }
// console.log(showInfo({ theName: "Elzero", theAge: 40 }));

// function showFullInfo(data: Full) {
//     console.log(`The Name Is ${data.theName}`);
//     console.log(`The Age Is ${data.theAge}`);
//     console.log(`The Country Is ${data.country}`);
// }
// console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));

// assignment 4

// function yesOrNo(val: number | string) : "True" | "False" | "Error"{
//     if(typeof val === "string") return "Error"
//     return val > 10 ? "True" : "False";
// }

//   // Do Not Edit Here
//   console.log(yesOrNo("100")); // Error
//   console.log(yesOrNo(30)); // True
//   console.log(yesOrNo(8)); // False

// assignment 5
// type custom = "Yes" | "No" | "Error"
// function isHeOld(age: number | string) : custom {
//     if(typeof age === "string") return "Error"
//     return age > 40 ? "Yes" : "No";
// }

//   // Do Not Edit Here
//   console.log(isHeOld("100")); // Error
//   console.log(isHeOld(45)); // "Yes"
//   console.log(isHeOld(30)); // "No"

// assignment 6
// let post : readonly [number, string, boolean];
// // post = [100, 200, "Title"]; // Error
// // post = ["Title", 100, true]; // Error
// post = [100, "Title", true]; // Good

// // post.push("Elzero"); // Error => Cant Add

// // Create Destructuring Here
// let [id , title , state] = post
// // Do Not Edit Here
// console.log(id); // 100
// console.log(title); // "Title"
// console.log(state); // true

// assignment 7
// Create Enums + Function Here
// enum Game {
//     Easy = 100 ,
//     Medium = 80,
//     Hard = 30,
//     Insane = 20
// }
// // Output
// console.log(Game.Easy); // 100
// console.log(Game.Medium); // 80
// console.log(Game.Hard); // 30
// console.log(Game.Insane); // 20

// assignment 8
// const user: {
//     username: string,
//     age: number | string,
//     website?: string,
//     skills: {
//         frontEnd: string[],
//         backEnd: (string | number)[]
//     }
// } = {
//     username: "Elzero",
//     age: 40,
//     website: "Elzero.org",
//     skills: {
//         frontEnd: ["HTML", "CSS", "JS"],
//         backEnd: ["PHP", "Python"]
//     }
// }

//   // We Need To Remove Error From This Edits
// user.username = "Osama";
// user.age = "40";
// user.skills.backEnd.push(100);

// ----------------------------------Interface---------------------------------
/*
    - Interface Declaration
    --- Serve Like Types
    --- The Interface Describes The Shape Of An Object
    --- It Defines The Syntax To Follow

    --- Use With Object
    --- Use With Function
    --- Use Read Only And Optional Operator
*/

// interface User {
//     id?: number,
//     readonly username: string,
//     country: string
// }

// let user: User = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt"
// }

// user.country = "Syria";

// console.log(user);

// function getData(data: User) {
//     console.log(`Id Is ${data.id}`);
//     console.log(`Username Is ${data.username}`);
//     console.log(`Country Is ${data.country}`);
// }

// getData({ id: 200, username: "Osama", country: "KSA" });
// getData({ username: "Osama", country: "KSA" }); // will give Error if id is not optional (id?: number)

// -----------------------------------Interface Method And Parameters---------------


// interface User  {
//     id: number;
//     username: string;
//     country: string;
//     sayHello() : string;
//     sayWelcome: () => string;
//     getDouble(num: number) : number;
// }

// let user: User = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt",
//     sayHello() {
//         return `Hello ${this.username}`;
//     },
//     sayWelcome: () => {
//         return `Welcome ${user.username}`;
//     },
//     getDouble(n) {
//       return n * 2;
//     }
// }

// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(100));

// ---------------------------------------ReOpen The Interface And Use Cases------------------


// // Homepage
// interface Settings {
//     readonly theme: boolean;
//     font: string;
// }

// // Articles Page
// interface Settings {
//     sidebar: boolean;
// }

//   // Contact Page
// interface Settings {
// external: boolean;
// }

// let userSettings: Settings = {
//     theme: true,
//     font: "Open Sans",
//     sidebar: false,
//     external: true
// }

// -------------------------------------Extending Interfaces-------------------------


// interface User {
//     id: number;
//     username: string;
//     country: string;
// }

// interface Moderator {
//     role: string | number;
// }

// interface Admin extends User,Moderator { // like & in type
//     protect?: boolean;
// }

// let user: Admin = {
//     id: 100,
//     username: "Elzero",
//     country: "Egypt",
//     role: "Mod",
//     protect: true,
// }

// console.log(user.id);

// ---------------------------------- Interface vs Type Aliases-----------------------
/*
** with Type you can not reopen Type and add properties but interface you can : 

[1] Type : 
type setting = {
    font: string;
}
type setting = { // will give you Error
    sidebar: boolean;
} 

[2] Interface :
interface setting  {
    font: string;
}
interface setting  { // No Error
    sidebar: boolean;
} 

** with Interface you can use extends but with Type you use &

[1] Type : type Admin = User & Moderator
[2] Interface : interface Admin extends User,Moderator{}

*/

// let el = document.getElementById("id") as HTMLElement; // - Take A Look On HTMLElement Interface

// // Homepage
// type Settings = {
//     readonly theme: boolean;
//     font: string;
//     sidebar: boolean;
//     external: boolean;
// }

// let userSettings: Settings = {
//     theme: true,
//     font: "Open Sans",
//     sidebar: false,
//     external: true
// }

// ---------------------------------- Class Type Annotations-----------------------


// class User {
//     u: string;
//     s: number;
//     msg: () => string;
//     constructor(username: string, salary: number) {
//         this.u = username;
//         this.s = salary;
//         this.msg = function () {
//             return `Hello ${this.u} Your Salary Is ${this.s}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this.u} Your Salary Is ${this.s}`;
//     }
// }

// let userOne = new User("Elzero", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// ---------------------------------- Data Access Modifiers & Parameters Properties-----------------------
/*
    Class
    - Data Access Modifiers & Parameters Properties
    --- Public
    ------ All Members Of A Class In TypeScript Are Public
    ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
    --- Private
    ------ Members Are Visible Only To That Class and it's subclasses And Are Not Accessible Outside The Class
    --- Protected
    ------ Same Like Private But Can Be Accessed Using The Deriving Class

    - TypeScript Is A Layer On Top Of JavaScript
    - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

// class User {
//     // private username: string;
//     // protected salary: number;
//     // public readonly address: string;
//     msg: () => string;
//      // if you use Parameters Properties here no need to write it at the begining of class and no need to write this.username = username ...
//     constructor(private username: string, protected salary: number,public readonly address: string) {
//         this.msg = function () {
//         return `Hello ${this.username} Your Salary Is ${this.salary}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// // console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// ---------------------------------- Class Get And Set Accessors-----------------------


// class User {
//     public get username(): string {
//         return this._username;
//     }
//     public set username(value: string) {
//         this._username = value;
//     }
//     msg: () => string;
//     constructor(private _username: string, public salary: number, public readonly address: string) {
//         this.msg = function () {
//             return `Hello ${this._username} Your Salary Is ${this.salary}`;
//         }
//     }
//     sayMsg() {
//         return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//     // get username() : string {
//     //   return this._username;
//     // }
//     // set username(value: string) {
//     //   this._username = value;
//     // }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// userOne.username = "Ahmed";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// --------------------------------Class- Static Members----------------
/*
--- Don't Use "name, length, call"
*/

// class User {
//     private static created: number = 0;
//     static getCount() : void {
//         console.log(`${this.created} Objects Created`);
//     }
//     constructor(public username: string) {
//         User.created++;
//     }
// }

// let u1 = new User("Elzero");
// let u2 = new User("Web");
// let u3 = new User("School");
// // console.log(User.created);
// User.getCount();

// -----------------------------Class- Implement Interface-------------------

/*
[1] with Class- Implement Interface you can use theme , font , save() and more no problem but not less than theme , font , save()

[2] with Interface with Object you must use theme , font , save() no more or no less
interface Settings {
    theme: boolean;
    font: string;
    save(): void;
}
let obj : Settings = {
    theme : true,
    font : "Open Sans",
    save(){
        console.log("Saved")
    },
    // Update(){ // Error
    //     console.log("Update")
    // }
}
*/
// interface Settings {
//     theme: boolean;
//     font: string;
//     save(): void;
// }

// class User implements Settings {
//     constructor(public username: string, public theme: boolean, public font: string) {}
//     save(): void {
//         console.log(`Saved`);
//     }
//     update(): void {
//         console.log(`Updated`);
//     }
// }

// let userOne = new User("Elzero", true, "Open Sans");

// console.log(userOne.username);
// console.log(userOne.font);

// userOne.save();
// userOne.update();

// ----------------------------Assignments from lesson 22 to lesson 31------------------

// assignment 1
// Edit The Interface To Fix The Problems
// interface Member {
//     id: number | string;
//     username: string;
//     country?: string;
//     state: boolean;
//     getName() : void;
// }

// // Do Not Edit The Code Below
// let user: Member = { // Property 'country' is missing in type
//     id: 100,
//     username: "Elzero",
//     state: true,
//     getName() { // 'getName' does not exist in type 'Member'
//         return this.username;
//     }
// }

// user.id = 200;
// user.id = "200"; // Type 'string' is not assignable to type 'number'
// user.state = false; // Cannot assign to 'state' because it is a read-only property

// assignment 2
// Create Interface Here
// interface Client {
//     id: number;
//     username: string;
//     active: boolean;
//     discount: number;
//     getPrice(price: number) : void;
// }
// // Do Not Edit The Code Below
// let client: Client = {
//     id: 100,
//     username: "Elzero",
//     active: true,
//     discount: 10,
//     getPrice(price: number) {
//         return price - this.discount;
//     }
// }

// console.log(`Client Id Is ${client.id}`);
// console.log(`Client Name Is ${client.username}`);
// console.log(`Client Has Dicount ${client.discount}`);
// console.log(`Client Product After Discount Is ${client.getPrice(200)}`);

// assignment 3
// interface Superman extends Man,Bird {
//     bodyType: string;
//     origin: string;
// }
// // Do Not Edit The Code Below
// interface Man {
//     title: string;
//     weight: number;
//     age: number;
// }

// interface Bird {
//     canFly: boolean;
// }

// let creature: Superman = {
//     title: "Superman",
//     weight: 100,
//     age: 500,
//     canFly: true,
//     bodyType: "Iron",
//     origin: "Krypton"
// }

// assignment 4
// Create Class Here
// class Player {
//     // details : () => string // if you want to use details as instance method you should write this -- if you will use details as class method no need to write this
//     constructor( public name : string , public job : string , public level : (string | number) , public vip ?: boolean){
//         // this.details = () => {
//         //     if(this.vip){
//         //         return `VIP ${this.name}, Type Is ${job} Level IS ${this.level}`
//         //     }
//         //     return `${this.name}, Type Is ${job} Level IS ${this.level}`
//         // }
//     }
//     details() {
//         if(this.vip){
//             return `VIP ${this.name}, Type Is ${this.job} Level IS ${this.level}`
//         }
//         return `${this.name}, Type Is ${this.job} Level IS ${this.level}`
//     }
// }
// // Do Not Edit The Code Below
// let player1 = new Player("Osama", "Mage", 90, true);
// let player2 = new Player("Shady", "Archer", "85", false);
// let player3 = new Player("Amr", "Fighter", 50, true);
// let player4 = new Player("Mahmoud", "Assassin", 77);

// console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
// console.log(player2.details()); // Shady, Type Is Archer Level Is 85
// console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
// console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// Assignment 5
// class Shorten {
//     constructor (public id: number, public username: string, protected title: string) {}
// }

// let tester = new Shorten(100, "Elzero", "Developer");

// console.log(tester.id);
// console.log(tester.username);

// Assignment 6
// class Show {
//     public get title(): string {
//         return this._title;
//     }
//     public set title(value: string) {
//         this._title = value;
//     }
//     constructor (private _title: string) {}
// }

// let tester = new Show("Elzero");

// console.log(tester.title); // Property 'title' does not exist on type 'Show'
// tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
// console.log(tester.title); // Property 'title' does not exist on type 'Show'

// Assignment 7
// interface Play {
//     id: number;
//     title: string;
//     level: number | string;
//     logIn(): void;
//     logOut(msg: string): void;
// }

// // Create Your Class Here
// class Player implements Play {
//     logIn: () => void 
//     logOut: (msg : string) => void 
//     constructor(public id: number, public title: string, public level: (number | string)) {
//         this.logIn = () => {
//             console.log(`Logged In`);
//         }
//         this.logOut = (msg) => {
//             console.log(`Logged Out , Good Bye`);
//         }
//     }
//     // logIn(): void {
//     //     console.log(`Logged In`);
//     // }
//     // logOut(msg : string): void {
//     //     console.log(`Logged Out , Good Bye`);
//     // }
// }

// let player1 = new Player(100, "Elzero", 95);

//   console.log(player1.id); // 100
//   console.log(player1.title); // "Elzero"
//   console.log(player1.level); // 95
//   player1.logIn(); // Logged In
//   player1.logOut("Good Bye"); // Logged Out, Good Bye

// -------------------------------------Class Abstract Classes And Members--------------------
/*
** Abstract Class is a parent class which child classes inherit from it so we do not create instance from Abstract Class
** Abstract Method means that child Classes should has this Method (you write only the method name at Abstract Class and write what the method do at child class)
*/

// abstract class Food {
//     constructor(public title: string) {}
//     abstract getCookingTime() : void;
// }

// class Pizza extends Food {
//     constructor(title: string, public price: number) {
//         super(title);
//     }
//     getCookingTime() : void {
//         console.log(`Cooking Time For Pizza Is 1 Hour`);
//     }
// }

// class Burger extends Food {
//     constructor(title: string, public price: number) {
//         super(title);
//     }
//     getCookingTime() : void {
//         console.log(`Cooking Time For Burger Is Half Hour`);
//     }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();

// ----------------------------------------------Polymorphism-------------------------------
/*
    Class
    - Polymorphism & Method Override

    - Polymorphism
    --- Classes Have The Same Methods But Different Implementations

    - Method Override
    --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
    --- A Method In Child Class Must Have Same Name As Parent Class

    --- noImplicitOverride (option in tsconfig file to give you Error if you did not write override keyword)
*/

// class Player {
//     constructor(public name: string) {}
//     attack() : void {
//         console.log("Attacking Now");
//     }
// }

// class Amazon extends Player {
//     constructor(name: string, public spears: number) {
//         super(name);
//     }
//     override attack(): void {
//       // super.attack();
//         console.log("Attacking With Spear");
//         this.spears -= 1;
//     }
// }

// class Barbarian extends Player {
//     constructor(name: string, public axeDurability: number) {
//         super(name);
//     }
//     override attack(): void {
//       // super.attack();
//         console.log("Attacking With Axe");
//         this.axeDurability -= 1;
//     }
// }

// let barOne = new Barbarian("Elzero", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);

// ----------------------------------------------Generics-------------------------------
/*
** you can write <type> and use it to decide which type of  will be used as parameter of the function and what the type which is the fucntion should return

    Generics
    - Help Write A Reusable Code
    - Allow To Pass Type As A Parameter To Another Type
    - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
    - We Can Create:
    --- Generic Classes
    --- Generic Functions
    --- Generic Methods
    --- Generic Interfaces
*/

// function returnNumber(val: number) : number {
//     return val;
// }
// function returnString(val: string) : string {
//     return val;
// }
// function returnBoolean(val: boolean) : boolean {
//     return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("Elzero"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T) : T {
//     return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));

// ------------------------------------Generics-Arrow Function-Multiple Types- Discussion-------------


// function returnType<T>(val: T): T {
//     return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//     return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//     return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));

// -------------------------------Generic classes------------------
// class User<T = string> { // = string is default value
//     constructor(public value: T) {}
//     show(msg: T) : void {
//         console.log(`${msg} - ${this.value}`);
//     }
// }

// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100); // you have to write <number | string> because we use 100 when creating instance and use string when use method (show)
// console.log(userTwo.value);
// userTwo.show("Message");

// ----------------------------Generics- Classes And Interfaces---------------------------


// interface Book {
//     itemType: string;
//     title: string;
//     isbn: number;
// }

// interface Game {
//     itemType: string;
//     title: string;
//     style: string;
//     price: number;
// }

// class Collection<T> {
//     public data: T[] = []; // in JS constructor(){this.data = []}
//     add(item: T) : void {
//         this.data.push(item);
//     }
// }

// let itemOne = new Collection<Book>();
// itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
// itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
// console.log(itemOne);

// let itemTwo = new Collection<Game>();
// itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
// console.log(itemTwo);

// ----------------------------Assignments from lesson 32 to 38------------------------
// Assignment 1
// Do Not Edit
// type numandstring = number | string;

// abstract class Game {
//     constructor(public title: string, public price: numandstring) {}
//     abstract getLocation() : string;
//     abstract getDiscount() : string;
// }

// // Start Edit And Fix
// class RPG extends Game {
//     constructor(title: string, public price: numandstring, public rate: number) {
//         super(title,price)
//     }
//     getLocation(){
//         return "Location"
//     }
//     getDiscount(){
//         return "Discount"
//     }
// }

// class Action extends Game {
//     constructor(title: string, public price: numandstring, public rate: number, public company:string) {
//         super(title,price)
//     }
//     getLocation(){
//         return "Location"
//     }
//     getDiscount(){
//         return "Discount"
//     }
// }
// // End Edit And Fix

// // Do Not Edit
// let gameOne = new RPG("Ys", 100, 10);
// let gameTwo = new Action("Uncharted", 90, 15, "Sony");

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// console.log(gameOne.rate); // 10
// console.log(gameOne.getDiscount()); // "Discount"
// console.log(gameOne.getLocation()); // "Location"

// console.log(gameTwo.title); // "Uncharted"
// console.log(gameTwo.price); // 90
// console.log(gameTwo.rate); // 15
// console.log(gameTwo.company); // "Sony"
// console.log(gameTwo.getDiscount()); // "Discount"
// console.log(gameTwo.getLocation()); // "Location"

// Assignment 2
// Write Function Code Here
// ****** Giving void will make the generic type optional.
// function showTypes<t1 = void,t2 = void,t3 = void>(a?:t1,b?:t2,c?:t3):string{
//     return `${a?a:"Nothing"} - ${b?b:"Nothing"} - ${c?c:"Nothing"}`
// }
// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true

//Assignment 3
// Write Class Code Here

// class Game<t1, t2 = number>{
//     constructor(public title:t1,public price:t2){}
//     getDiscount(x:t1) : void{
//         console.log(`The Discount is ${x}`)
//     }
// }
// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80".