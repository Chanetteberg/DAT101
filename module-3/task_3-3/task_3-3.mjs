"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Function that prints today´s date in Norwegian standard //

function printNorwegianDate() {
    const today = new Date ();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut(norwegianDate);

}

printNorwegianDate();

printOut(newLine);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printAndReturnNorwegianDate() {
    const today = new Date ();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const norwegianDate = today.toLocaleDateString('no-NB', options);
    printOut("🗓️ I dag er det: " + norwegianDate);
    return today;
}
function daysUntil2XKO(today) {
    const releaseDate = new Date(2025, 4, 14);
    releaseDate.setHours(0,0,0);
    today.setHours(0,0,0);
    const msPerDay = 1000 * 60 * 60* 24;
    const diff = Math.ceil ((releaseDate - today) / msPerDay);
    return diff;
    
}

const todayObj = printAndReturnNorwegianDate();
const daysLeft = daysUntil2XKO(todayObj);

if (daysLeft > 0) {
    printout (`🎮 Bare ${daysLeft} dager igjen til 2XKO lanseres! gjør deg klar for kamp!`);
} else if (daysLeft === 0) {
    printOut("🎉 2XKO lanseres i dag! La kampene begynne!");
} else {
    printOut("2XKO er allerede lansert! Håper du har det gøy med spillet!");
}

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function printCircleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    printOut(`For a circle with radius ${radius}:`);
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference : ${circumference.toFixed(2)}`);
    printOut(`Area: ${area.toFixed(2)}`);
}
printCircleInfo(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleInfo(rect) {
    const circumference = 2 * (rect.width + rect.height);
    const area = rect.width * rect.height;
    printOut(`For a rectangle with width ${rect.width} and height ${rect.height}:`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);

}
printRectangleInfo({ width: 7, height: 4 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temp, type) {
    let c, f, k;
    if (type === "C") {
        c = temp;
        f = Math.round((c * 9/5) + 32);
        k = Math.round (c + 273.15);
        printOut (`${c}°C is ${f}°F and ${k}K`);
    } else if (type === "F") {
        f = temp;
        c = Math.round ((f - 32) * 5/9);
        k = Math.round (c + 273.15);
        printOut (`${f}°F is ${c}°C and ${k}K`);
    }else if (type === "K") {
        k = temp;
        c = Math.round (k - 273.15);
        f = Math.round ((c * 9/5) + 32);
        printOut (`${k}K is ${c}°C and ${f}°F`);
    } else {
        printOut("Unknown temperature type. Please use 'C', 'F', or 'K'.");
    }
}

convertTemperature(25, "C");
convertTemperature(77, "F");
convertTemperature(300, "K");


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function priceWithoutVAT(gross, vatGroup){
    let vat;
    switch ( vatGroup.toLowerCase()){
        case "normal":
            vat = 25;
            break;
        case "food":
            vat = 15;
            break;
        case "hotel":
        case "transport":
        case "cinema":
            vat = 10;
            break;
        default:
            printOut("Unknown VAT group!");
            return NaN;
        }
        const net = (100 * gross) / (vat + 100);
        printOut(`Gross: ${gross} (VAT group: ${vatGroup} => Net: ${net.toFixed(2)}`);
        return net;
    }
priceWithoutVAT(1000, "normal");    // 25%
priceWithoutVAT(1000, "food");      // 15%
priceWithoutVAT(1000, "hotel");     // 10%
priceWithoutVAT(1000, "goblins");   // Unknown group

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function to calculate speed, distance or time//
function calculateSpeedDistanceTime(speed, distance, time) {
    let missing = [ 'speed', 'distance', 'time' ].filter(v => v === undefined || v === null).length;
if (missing > 1) {
    printOut("More than one parameter is missing. Cannot Calculate.");
    return NaN;
}
if (speed === undefined || speed === null){
    const result = distance / time;
    printOut(`Speed = ${result}`);
    return result;
}
if (distance === undefined || distance === null) {
    const result = speed * time;
    printOut(`Distance = ${result}`);
    return result;  
} 
if (time === undefined || time === null) {
    const result = distance / speed;
    printOut(`Time = ${result}`);
    return result;  
}
printOut("All parameters provided. Nothing to calculate.");
return NaN;
}
// Example usage:
calculateSpeedDistanceTime(undefined, 100, 2); // Speed = 50
calculateSpeedDistanceTime(50, undefined, 2);  // Distance = 100
calculateSpeedDistanceTime(50, 100, undefined); // Time = 2
calculateSpeedDistanceTime(undefined, undefined, 2); // NaN

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padString(text, maxSize, char, insertBefore) {
    let newText = text;
    let padLength = maxSize - TextTrack.length;
    if (padLength < 0) {
        let padStr = char.repeat(padLength);
        if (insertBefore) {
            newText = padStr + text;
        } else {
            newText = text + padStr;

        }

    }
    printOut(`Result: "${newText}"`);
    return newText;
}
padString("hello", 10, "*", true);   // Pads before: *****hello
padString("world", 10, "-", false);  // Pads after: world-----
padString("longtext", 5, "#", true); // No padding, returns original


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function to test the mathematical expression for 200 lines//
function testMathExpression (lines) {
    let start = 1;
    for (let n = 2; n <= lines + 1; n++) {
        let leftSum = 0;
        for (let i = 0; i < n; i++) {
            leftSum += start + i;

    }
let rightSum = 0;
for (let i = 0; i < n - 1; i++) {
rightSum += start + n + i;

}
if (leftSum !== rightSum) {
    printOut (`Failed at line ${n-1}; Left (${leftSum}) = ≠ Right (${rightSum})`);
 return;

}
 start += n + (n-1);
}
printOut("Maths fun!");
} // <-- Add this closing brace to end the function

testMathExpression(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n < 1) {
        return 1;
    }
      return n * factorial (n - 1);
}  

const num = 6;
const result = factorial(num);
printOut(`Factorial of ${num} is ${result}`);

printOut(newLine);
printOut("--- That's all! ------------------------------------------------------------------------------------------");