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