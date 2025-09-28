"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Count from 1 to 10 //

let textPart1Line1 = "";
let textPart1Line2 = "";
for(let i = 1, j =10; i <= 10; i++, j--) {
  textPart1Line1 += i + " ";
  textPart1Line2 += j + " ";
}
printOut(textPart1Line1.trim());
printOut(textPart1Line2.trim());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part1GuessNumber = 45;
let part1Random = Math.floor ( Math.random() * 60) + 1;
while (part1Random !== part1GuessNumber ) { 
    part1Random = Math.floor ( Math.random () * 60) + 1;
}
printOut("Yes! you guessed correct: " + part1Random) ;  

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


const part3Time = Date.now();
printOut(part3Time);
const part3GuessNumber = 654321;
let part3Random; 
let part3Count = 0;
do{
   part3Random = Math.floor (Math.random () * 1000000) + 1;
   part3Count++;
}while ( part3Random !== part3GuessNumber ); 

printOut ("number of guesses: " + part3Count);
const Part3DeltaTime = Date.now() - part3Time;
printOut("number of mSec: " + Part3DeltaTime);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textPart4primes  = "";
for (let i = 1; i < 200; i++){
    let j = i - 1;
    let isPrime = true;
    while( j > 1 && isPrime){
        let rest = i % j; 
        isPrime = rest != 0;
        j--;
    }
    if (isPrime) {
         textPart4primes += " " + i;
    }
}
printOut(textPart4primes);
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Outer loop for rows (R1 to R7)//
for (let row = 1; row <=7; row++) {
    let line = "";
    for (let col = 1; col <=9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    printOut (line.trim()); 
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Simulate 5 student grades ( points between 1 ans 236)//

let grade1 = Math.floor (Math.random () * 236) + 1;
let grade2 = Math.floor (Math.random () * 236) + 1;
let grade3 = Math.floor (Math.random () * 236) + 1;
let grade4 = Math.floor (Math.random () * 236) + 1;
let grade5 = Math.floor (Math.random () * 236) + 1;

//Function to convert points to percent and grade letter //
function getGradeLetter(points) {
    let percent = (points / 236) * 100;
    if (percent >= 89) return "A";
    if (percent >= 77) return "B";
    if (percent >= 65) return "C";
    if (percent >= 53) return "D";
    if (percent >= 41) return "E";
    return "F";
}

//Print each student´s grade and letter//

printOut("Student 1: " + grade1 + " (" + getGradeLetter (grade1) + ")");
printOut("Student 2: " + grade2 + " (" + getGradeLetter (grade2) + ")");
printOut("Student 3: " + grade3 + " (" + getGradeLetter (grade3) + ")");
printOut("Student 4: " + grade4 + " (" + getGradeLetter (grade4) + ")");
printOut("Student 5: " + grade5 + " (" + getGradeLetter (grade5) + ")");

//Bonus: Sort and print grades in descending order//

let max, label;
let g1= grade1, g2= grade2, g3= grade3, g4= grade4, g5= grade5;
for (let i= 1; i <=5; i++) {
    max = g1; label = "Student 1";
    if (g2 > max) { max = g2; label = "Student 2"; }
    if (g3 > max) { max = g3; label = "Student 3"; }
    if (g4 > max) { max = g4; label = "Student 4"; }
    if (g5 > max) { max = g5; label = "Student 5"; }
    printOut(label + ": " + max + " (" + getGradeLetter (max) + ")");

    //Set the printed grade to -1, so it wont be picked again//
    if (label === "Student 1") g1 = -1;
    if (label === "Student 2") g2 = -1;
    if (label === "Student 3") g3 = -1;
    if (label === "Student 4") g4 = -1;
    if (label === "Student 5") g5 = -1;
}   

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Helper function to roll 6 dice//

function rollDice() {
    let dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push (Math.floor(Math.random() * 6) + 1);

} return dice;
}

// Helper function to count occurrences of each value//

function countDice(dice) {
    let count = [0, 0, 0, 0, 0, 0]; // index 1-6 
    for (let d of dice) {
        count [d]++;
    
         }
         return count;
        
}

// 1. Full straight (1-6)//
let throwFullStraight = 0;
while (true) {
    throwFullStraight ++;
    let dice = rollDice ();
    let unique = new Set (dice);
    if (unique.size === 6) break;
}

// 2. 3 pairs //

let throwThreePairs = 0;
while (true) {
    throwThreePairs++;
    let dice = rollDice();
    let counts = countDice (dice);
    let pairs = 0;
    for (let i = 1; i <= 6; i++) {
        if (counts [i] === 2) pairs++;
    }
    if (pairs === 3) break;
   
}
printOut("Throws to get 3 pairs; " + throwThreePairs);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
