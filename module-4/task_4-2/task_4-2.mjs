"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

// Hard-coded array 1..20
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (let i = 0; i < numbers.length; i++) {
  printOut(numbers[i].toString());
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join(" • "));


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const text = "Hei på deg, hvordan har du det?";
const words = text.split(/\s+/).map(w => w.replace(/[.,!?]/g, ""));
for (let i = 0; i < words.length; i++) {
  printOut(`Word ${i + 1} (index ${i}): ${words[i]}`);
}
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const names = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
  "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina",
  "Maria", "Elisabeth", "Kristin"
];

function removeElement(arr, text) {
  const idx = arr.indexOf(text);
  if (idx === -1) {
    printOut(`${text} does not exist in the array.`);
    return false;
  }
  arr.splice(idx, 1);
  printOut(`${text} was removed from the array.`);
  return true;
}

removeElement(names, "Kari");           
removeElement(names, "Gandalf");        

printOut(names.join(" • "));
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const boys = ["Jakob","Lucas","Emil","Oskar","Oliver","William","Filip","Noah","Elias","Isak","Henrik","Aksel","Kasper","Mathias","Jonas","Tobias","Liam","Håkon","Theodor","Magnus"];
const allNames = names.concat(boys);

printOut(allNames.join(" • "));

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  toString() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
  }
}

const books = [
  new TBook("The Hobbit", "J.R.R. Tolkien", "978-0261103344"),
  new TBook("1984", "George Orwell", "978-0451524935"),
  new TBook("Pride and Prejudice", "Jane Austen", "978-0141439518")
];

for (let i = 0; i < books.length; i++) {
  printOut(books[i].toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
  Monday:    { name: "Mandag",    short: "Ma" },
  Tuesday:   { name: "Tirsdag",   short: "Ti" },
  Wednesday: { name: "Onsdag",    short: "On" },
  Thursday:  { name: "Torsdag",   short: "To" },
  Friday:    { name: "Fredag",    short: "Fr" },
  Saturday:  { name: "Lørdag",    short: "Lø" },
  Sunday:    { name: "Søndag",    short: "Sø" }
};

// Create an array of keys and traverse it
const weekKeys = Object.keys(EWeekDays);
for (const k of weekKeys) {
  // print the key and the corresponding object entry
  printOut(`${k}: ${EWeekDays[k].name} (${EWeekDays[k].short})`);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut("Original (unsorted): " + randomNumbers.join(" "));

const ascending = [...randomNumbers].sort((a, b) => a - b);
printOut("Ascending: " + ascending.join(" "));

const descending = [...randomNumbers].sort((a, b) => b - a);
printOut("Descending: " + descending.join(" "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers2 = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
printOut("Original (unsorted): " + randomNumbers2.join(" "));

// Sort ascending using a callback function
const ascending2 = [...randomNumbers2].sort((a, b) => a - b);
printOut("Ascending: " + ascending2.join(" "));

// Sort descending using a callback function
const descending2 = [...randomNumbers2].sort((a, b) => b - a);
printOut("Descending: " + descending2.join(" "));

// Count occurrences for numbers 1..20
const counts = {};
for (let n = 1; n <= 20; n++) counts[n] = 0;
for (const num of randomNumbers2) counts[num]++;

// 1) Print numbers and their frequency (1..20)
printOut("Number : Frequency");
for (let n = 1; n <= 20; n++) {
  printOut(`${n} : ${counts[n]}`);
}

// 2) Print frequencies and which numbers they correspond to,
// sorted by frequency desc, and for equal frequency by number asc
const freqMap = {};
for (let n = 1; n <= 20; n++) {
  const f = counts[n];
  if (!freqMap[f]) freqMap[f] = [];
  freqMap[f].push(n);
}
const freqs = Object.keys(freqMap).map(Number).sort((a, b) => b - a); 

printOut("Frequency => Numbers");
for (const f of freqs) {
  freqMap[f].sort((a, b) => a - b); 
  printOut(`${f} => ${freqMap[f].join(", ")}`);
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rows = 5;
const cols = 9;
const grid = [];

for (let r = 0; r < rows; r++) {
  const row = [];
  for (let c = 0; c < cols; c++) {
    row.push(`R${r + 1}C${c + 1}`);
  }
  grid.push(row);
}
for (let r = 0; r < rows; r++) {
  let line = "";
  for (let c = 0; c < cols; c++) {
    line += grid[r][c] + " ";
  }
  printOut(line.trim());
}

printOut("Second print:");
for (const row of grid) {
  let line = "";
  for (const cell of row) {
    line += cell + " ";
  }
  printOut(line.trim());
}
printOut(newLine);
