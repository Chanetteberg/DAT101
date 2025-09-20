"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if ( wakeUpTime == 7) {
  printOut("if i wake up exactly 7´o clock then i catch the bus to school. ");
} else if (wakeUpTime == 8 ) {
   {printOut("if i wake up later than 8´o clock ,then i can take the train  to school. "); }
} else {
  printOut("Otherwise i have to take the car to school.");
}

printOut(newLine)

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("check if a number is positive, negative or zero");

let number = 0;

if (number > 0) {
  printOut ("Positive");
} else if (number < 0) {
  printOut ("Negative");
} else {
  printOut ("Zero");
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSizeMP = Math.floor(Math.random() * 8) + 1;
printOut ("Uploaded image size : " + imageSizeMP + "MP" );

if (imageSizeMP >= 4 ) {
  printOut ("Thank you");
} else {
  printOut ("The Image too small");

} 
  printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let imageSizeMP2 = Math.floor(Math.random()* 8) +1;
printOut ("Uploaded image size : " + imageSizeMP2 + "MP");

if (imageSizeMP >= 6 ) {
  printOut ("Image is too large");
} else if (imageSizeMP2 >= 4 ) {
  printOut ("Thank you");
} else {
  printOut ("The Image too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList = ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random()* noOfMonth)];
printOut ("Random month: " + monthName);

if (monthName.toLowerCase(). includes ("r")) {
  printOut(" You must take vitamin D");
} else {
  printOut(" You don't need to take vitamin D");
}
printOut(newLine);


printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList2= ["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList2.length;
const monthName2 = monthList2[Math.floor(Math.random()* noOfMonth2)];
printOut ("Random month: " + monthName2);

if ("November", "December", "January", "February", "March".includes(monthName2)) {
  printOut(" You must take vitamin D");
  } else {
  printOut(" You don't need to take vitamin D");
  }

let daysInMonth2; 
if (["April", "June", "September", "November"].includes(monthName2)) {
daysInMonth2 = 30;
} else if (monthName2 === "February") {
  daysInMonth2 = 28;
} else {
  daysInMonth2 = 31;
}
printOut("Number of days in " + monthName2 + ": " + daysInMonth2);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList3= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth3 = monthList3.length;
const monthName3 = monthList3[Math.floor(Math.random()* noOfMonth3)];
printOut ("Random month: " + monthName3);

if (monthName3 === "March" || monthName3 === "May") {
  printOut ("The gallery is closed for refurbishment.");
} else if (monthName3 === "April") {
  printOut ("The gallery is open in temporary premises next door.");
}else {
  printOut ("The gallery is open, welcome!");
} 


printOut(newLine);
