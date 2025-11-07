"use strict"
import {printOut, newLine} from "../../common/script/utils.mjs";

const Person = {fName: "" , lName: ""};
const persons = [];
function addNewPerson (aFname, aLname) {
    const newPerson = Object.create (Person);
    newPerson.fName = aFname;
    newPerson.lName = aLname;
    persons.push (newPerson);
}

addNewPerson ("Ola", "Nordmann");
addNewPerson ("Kari", "Hansen");
addNewPerson ("Per", "Olsen");

let text = "Persons:<br />";
for (let i= 0; i < persons.length; i++) {
  const person = persons[i];
text += person.fName + " " + person.lName + "<br />";
}

printOut (text);


