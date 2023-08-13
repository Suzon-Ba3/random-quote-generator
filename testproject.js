// // Object Methods
// let person = {
//     name: `S M Rafiqul Islam Suzon`,
//     Age: 29,
//     Ocuupation: `Web Developer`
// }
// let result;
// // hasOwnProperty()
// result = person.hasOwnProperty(`name`);
// console.log(result);
// // Object.keys()
// result = Object.keys(person);
// console.log(result);
// // Object.values()
// result = Object.values(person);
// console.log(result);
// // Object.entries()
// result = Object.entries(person);
// console.log(result);
// // Object.assign()
// result = Object.assign(person, {people: 16});
// console.log(result);
// // Object.defineProperty()
// result = Object.defineProperty(person, `Assignment`, {
//     value: 2,
//     writable: false
// });
// console.log(result);
// // Object.defineProperties()
// result = Object.defineProperties(person, {
//     University: {
//         value: `Dhaka University`,
//         writable: true
//     },
//     Department: {
//         value: `CSE`,
//         writable: true
//     }
// });
// console.log(result);
// // Object.preventExtensions()
// result = Object.preventExtensions(person);
// result = Object.isExtensible(person);
// person.previousUniversity = `DIIT`;
// console.log(result);
// // Object.seal()
// result = Object.seal(person);
// result = Object.isSealed(person);
// person.University = `DIIT`;
// console.log(result);
// // Object.freeze()
// result = Object.freeze(person);
// delete person.name;
// result = Object.isFrozen(person);
// console.log(result);

// for in loop
// let person = {
//     name: `S M Rafiqul Islam Suzon`,
//     Age: 29,
//     Ocuupation: `Web Developer`
// }
// for (property in person) {
//     // console.log(property);
//     // console.log(person[property]);
//     console.log(`Property: ${property} value: ${person[property]}`);
    
// }

// Object Constructor
// function Student(roll, name, number, address) {
//     this.roll = roll;
//     this.name = name;
//     this.number = number;
//     this.address = address;

//     this.output = function () {
//         console.log(this.roll);
//         console.log(this.name);
//         console.log(this.number);
//         console.log(this.address);
//     }
// }

// let student1 = new Student(1, `Suzon`, 1793925995, `Kishoreganj`);
// let student2 = new Student(2, `Saikat`, 1793925995, `Hossainpur`);
// let student3 = new Student(3, `Sagar`, 1793925995, `Nikli`);

// console.log(student1);

// student1.output();

// let objArray = [
//     {name: `S M Rafiquls Islam Suzon`, age: 29, income: 500000},
//     {name: `Dirk Saikat`, age: 25, income: 50000},
//     {name: `Suzon`, age: 20, income: 30000}
// ];
// for (let i = 0; i < objArray.length; i++) {
//     console.log(objArray[i].income);
//     // console.log(objArray[i]);
    
// }

// Object literal
// let person = {
//     name: `S M Rafiqul Islam Suzon`,
//     Age: 29,
//     Ocuupation: `Web Developer`,
//     skills: [`html`, `css`, `javascript`, `php`],
//     birthYear: function () {
//         return 2023 - this.Age;
//     },
//     address: {
//         Village: `Nandania`,
//         Union: `Pumdi`,
//         POPS: `Hossainpur`,
//         District: `Kishoreganj`,
//     }

// }
// Accessing a property and value
// let result;
// result = person.name;
// // result = person.Age;
// // result = person.birthYear();
// // result = person.Ocuupation;
// // result = person.skills;
// // result = person.address;
// console.log(result);

// Updating a property and value
// person.name = `Miftahul Islam`;
// person.Age = 25;
// person.Ocuupation = `Web Designer`;
// console.log(person);

// Adding a property and value
// person.Language = `Bangla`;
// person.MaritalStatus = `Married`;
// console.log(person);

// Deleting a property and value
// delete person.name;
// console.log(person);
// console.table(name);

// function cubeNumber(number){
//     let result = number * number * number;
//     console.log(result);
//     return result;
    
// } 
// // if(cubeNumber(number) !== String){
// // //     return 'Your Input Not Valid';
// // // }

// cubeNumber(5);


// const numbers = [34, 56, 87, 23, 45, 81, 90, 43, 32];

// for (let i = 0; i < numbers.length; i++){
//     let number = numbers[i];
//     console.log(number);
//     if(number < 80){
//         break;
//     } 
//     // console.log(number);
// }

// forOff Loop
// let arr = [`javascript`, `php`, `CSS`];
// let myName = 'S M Rafiqul Islam Suzon';

// for (item of myName) {
//     console.log(myName);
    
// }

// for ([index, item] of arr.entries()) {
//     if (index === 2) break;
//     console.log(`${index} ${item}`);
    
// }


// forEach Loop
// let arr5 = [`Javascript`, `Html`, `CSS`, `Python`];
// arr5.forEach (function (value, index, array) {
//     console.log(`${value} ${index} ${array}`);
// })
// // let arr4 = [10, 20, 30, 40];
// // arr4.forEach (function (value, index, array) {
// //     console.log(arr4[index] + 100);
// // })


// Leap Year Function
// function isLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0) {
//         console.log(`This is leap year`);
//     }
//     else {
//         console.log(`This is not leap year`);
//     }
// }
// isLeapYear(2024);


// Factorial of Number
// function multiplication(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
        
//     }
//     return result;
// }
// const multipleNumber = multiplication(9);
// console.log(multipleNumber);
// function factorial(n){
//     let answer = 1;
//     if (n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }
//   let n = 9;
//   answer = factorial(n)
//   console.log("Factorial of " + n + " : " + answer);
// function factorial(n){
//     if(n < 1){
//         return "number has to be positive."
//     }
    
//     //base case
//     if(n == 1){
//         return 1;
//     //recursive case
//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = 9;
// answer = factorial(n)
// console.log("Factorial of " + n + " : " + answer);

// dowhile loop
// let i = 10;

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// While Loop
// // let i = 1;
// // while (i <= 10) {
// //     console.log(i);
// //     i++;
// // }

// // let theVar = true;
// // while (theVar) {
// //     let random = Math.floor(Math.random() * 10 + 1);
// //     if (random == 7) {
// //         console.log(`You are so lucky`);
// //         break;
// //     }
// //     else {
// //         console.log(`Your number is ${random}`);
// //     }
// // }

// let userInput = Number(prompt(`Enter a Number`));
// while (userInput <= 10) {
//     alert(`Enter a Bigger Number`);
//     userInput = Number(prompt(`Enter Another Number`));
// }
// if (userInput > 10) {
//     alert(`You are Success`);
// }

// // let arr = [`A`, `B`, `C`];
// // console.log(arr);
// // let x = 0;
// // while (x < arr.length) {
// //     console.log(arr[x]);
// //     x++;
// // }

// For Loop
// for (let i = 0; i <= 10; i++) {
//     if (i === 5) break;
//     // if (i === 5) continue;
//     console.log(i);   
// }
// // console.log(`Line Break`);
// // for (let i = 10; i >= 0; i--) {
// //     // if (i === 5) break;
// //     // if (i === 5) continue;
// //     console.log(i);   
// // }
// // let arr1 = [`A`, `B`, `C`, `D`, `E`];
// // console.log(arr1);

// // for (let j = 0; j < arr1.length; j++) {
// //     console.log(arr1[j]);
// // }
// // console.log(`Line Break`);
// // for (let j = arr1.length-1; j >= 0; j--) {
// //     console.log(arr1[j]);
// // }
// // console.log(`Line Break`);
// // for (let jor = 0; jor <= 10; jor++) {
// //     if (jor % 2 == 0)
// //     console.log(jor);
// // }



// let sum = 0;
// for (let i = 1; i <= 10; i++) {
// console.log(`${sum} + ${i} = ${sum + i}`);
//     sum = sum + i;
// }
// console.log(`Result = ${sum}`);

// console.log(`Line Break`);
// for (let i = 0; i <= 10; i += 3) {
//     console.log(i);
// }
// // console.log(`Result = $(sum)`);
// let a = 10;
// // Increament Operator
// // a++;
// // Decreament Operator
// // a--;
// // Post Increament
// // let result = a++;
// // Pre Increament
// // let result = ++a;
// // Modify or Update
// // a += 10;
// // a -= 10;
// // console.log(result);
// // console.log(a);


// let arr1 = [9, 4, 6, 8, 1, 3, 7, 2, 5, 44];
// // let arr2 = ["Mustaim", "Mamun", "Shafiq", "Turja"];
// // arr1.sort(function (a, b) {
// //     return (a-b);
// // });
// // let result = arr1.slice(2, 3);
// // let result = arr1.splice(2, 1);
// // console.log(arr1.indexOf(9));
// // arr1.push(10);
// // arr1.pop();
// // arr1.shift()
// // arr1.unshift(10)
// // let result = arr1.splice(2, 1, 111);
// // console.log(Array.isArray(arr1));
// // console.log(arr1.length);
// // arr1.reverse();
// // console.log(arr1.concat(arr2));
// // let result = arr1.slice(-2,3);
// // console.log(result);
// // arr1[3] = 50;
// console.log(arr1);
// // console.log(result);


// // Template Litterals
// let name = "S M Rafiqul Islam Suzon";
// let age = 28;
// let occupation = "Web Developer"
// let district = "Kishoreganj"

// let myList = `<ul>
//                 <li>Name: ${name}</li>
//                 <li>Age: ${age}</li>
//                 <li>Occupation: ${occupation}</li>
//                 <li>District: ${district}</li>
//             </ul>`
// document.write(myList);


// function calculate() {
//     let addtion = (num1, num2) => num1 + num2;
//     let substruction = (num1, num2) => num1 - num2;
//     let multiplication = (num1, num2) => num1 * num2;
//     let divition = (num1, num2) => num1 / num2;

//     let num1 = parseFloat(document.getElementById('num1').value);
//     let num2 = parseFloat(document.getElementById('num2').value);

//     let selectedValue = document.getElementById('select-type').value;

//     if (selectedValue === 'Addition') {
//         document.getElementById('answer').innerHTML = addtion(num1, num2);
//     }
//     else if (selectedValue === 'Substruction') {
//         document.getElementById('answer').innerHTML = substruction(num1, num2);
//     }
//     else if (selectedValue === 'Multiplication') {
//         document.getElementById('answer').innerHTML = multiplication(num1, num2);
//     }
//     else if (selectedValue === 'Divition') {
//         document.getElementById('answer').innerHTML = divition(num1, num2);
//     }
//     else {
//         document.getElementById('answer').innerHTML = 'Please Enter 1st and 2nd Number';
//     }
// }




// // Invoket Function Expression/IFFE
// (function (x) {
//     let result = x * 2;
//     console.log(result);
// })(6)
// (function () {
//     console.log('Today I am so happy!');
// })()

// Arrow Function
// let createStudent = (roll, name) => ({roll: roll, name: name});
// console.log(createStudent(2, 'Suzon'));


// function userName(fname = 'Riyad', lname = ' Sagor') {
    
//     // Turnary Operator
//     // fname ? fname = fname : fname = 'Jubaer';
//     // lname ? lname = lname : lname = ' Ahmed';

//     // Previous Conditional Operator
//     // if (fname === undefined) {
//     //     fname = 'Jubaer';
//     // }

//     // if (lname === undefined) {
//     //     lname = ' Ahmed';
//     // }

//     return fname + lname;
// }

// console.log(userName());



// function clickbtn() {
//     let input = document.getElementById('stdinput').value;

//     input = parseInt(input);

// switch (input) {
//     case 1:
//     document.write('<img width="100px" src="https://21342663.fs1.hubspotusercontent-na1.net/hubfs/21342663/Tony_Headshot.png"> <br> Roll No: 01 <br> Class: 10 <br> Name: Tony Petrucciani')
//     break;

//     case 2:
//     document.write('<img width="100px" src="https://21342663.fs1.hubspotusercontent-na1.net/hubfs/21342663/Tony_Headshot.png"> <br> Roll No: 02 <br> Class: 09 <br> Name: Rob Petrucciani')
//     break;

//     case 3:
//     document.write('<img width="100px" src="https://21342663.fs1.hubspotusercontent-na1.net/hubfs/21342663/Tony_Headshot.png"> <br> Roll No: 03 <br> Class: 08 <br> Name: Quinton Petrucciani')
//     break;

//     case 4:
//     document.write('<img width="100px" src="https://21342663.fs1.hubspotusercontent-na1.net/hubfs/21342663/Tony_Headshot.png"> <br> Roll No: 04 <br> Class: 07 <br> Name: Ben Jones')
//     break;

//     case 5:
//     document.write('<img width="100px" src="https://21342663.fs1.hubspotusercontent-na1.net/hubfs/21342663/Tony_Headshot.png"> <br> Roll No: 05 <br> Class: 07 <br> Name: Suzon')
//     break;

//     default:
//     document.write('Your roll no do not match')
//     break;
     

//     }
// }








// let age = prompt("Enter your page to see videos");

// switch (player) {
//     case 'Tamim' :
//     case 'Sakib' :
//     case 'Mushfiq' :
//     case 'Mahmudullah' :
//     case 'Mashrafi' :
//     alert('He is a bangladeshi player')   
//     break;

//     case 'Rohit' :
//     case 'Dhoni' :
//     case 'Jadeja' :
//     case 'Kohli' :
//     case 'Ashwin' :
//     alert('He is a indian player')   
//     break;

//     default:
//     alert('He is not a player')
//     break;
// }

// // userInput = parseInt(userInput);

// if (age <= 17){
//     alert('You can watch funny videos')
// }
// else if (age >= 17 && age <= 50){
//     alert('You can watch romantic videos')
// }
// else{
//     alert('You are a old person')
// }

// let date = new Date();

// console.log(date);

// console.log(date.toDateString());

// console.log(date.getMonth());

// console.log(date.toTimeString());