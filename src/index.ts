/*
---------------------difference between Statically typed language and Dynamically Typed Language----------------------

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