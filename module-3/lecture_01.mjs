"use strict"
import {printOut} from "../../common/script/utils.mjs";

const text1 = "Du er gammel nok til å ta ed en som ikke er gammel nok.";
const text2 = "Du kan gå på kino!";
const text3 = "Beklager, du er ikke gammel nok";

const ageMovie = 16;
const ageBringAlong = 18;
let age1 = 15; // Gammel nok til å ha med seg en person under 16.
let age2 = 19; // Personen er ikke gammel nok til å gå alene.

if(age1 < age2) {
    const age1Old = age1;
    age1 = age2;
    age2 = age1Old;
 }




if (age1 >= ageMovie) {
    printOut("person 1: " + text2);
    if (age2 >= ageMovie) {
        printOut("person 2: " + text2);
    } else if (age1 >= ageBringAlong) {
        printOut("person 1: " + text1);
        printOut("person 2: " + text2);
    } else {
        printOut("person 2: " + text3);
    }
}else {
    printOut("vi har ingen case for dette!");







