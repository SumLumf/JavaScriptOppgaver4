// Opphave 1
// Lag en While-løkke som skriver ut tallene fra 0 til 10 på skjermen

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Oppgave 2
// Lag en While-løkke som skriver ut alle partallene mellom 1 og 10 på skjerme

// let j = 1;
// while (j <= 10) {
//     if (j % 2 === 0) {
//         console.log(j);
//     }
//     j++;
// }

// Oppgave 3
// Lag en While-løkke som viser oddetallene fra og med 9 til og med 1.

// let k = 9;
// while (k >= 1) {
//     if (k % 2 !== 0) {
//         console.log(k);
//     }
//     k--;
// }

// Oppgave 4
// Lag en While-løkke som summerer alle tallene fra 1 til 5 og skriver ut summen.

// let sum = 0;
// let n = 1;  
// while (n <= 5) {
//     sum += n; 
//     n++;       
// }

// console.log("Summen av tallene fra 1 til 5 er: " + sum);

// Oppgave 5
// Lag en While-løkke som skriver ut følgende på skjermen:
// #
// ##
// ###
// #### #####

// let p = 1;
// while (p <= 5) {
//     let row = "";
//     let q = 1;
//     while (q <= p) {
//         row += "#";
//         q++;
//     }
//     console.log(row);
//     p++;
// }

// Oppgave 6
// Lag et lite spill der brukeren må gjette et tall mellom 1 og 100. Bruk While-løkke for å fortsette til brukeren gjetter riktig. Bruk «promt» for å få et tall fra brukeren.

// const targetNumber = Math.floor(Math.random() * 100) + 1;
// let guessedNumber = null;
// while (guessedNumber !== targetNumber) {
//     guessedNumber = parseInt(prompt("Gjett et tall mellom 1 og 100:"));
//     if (guessedNumber < targetNumber) {  
//         console.log("For lavt! Prøv igjen.");
//     } else if (guessedNumber > targetNumber) { 
//         console.log("For høyt! Prøv igjen.");
//     } else {
//         console.log("Gratulerer! Du gjettet riktig tall: " + targetNumber);
//     }
// }

// Oppgave 7
// Lag en While-løkke som skriver ut tallene fra 1 til 100 i konsollen. For hver av følgende betingelser, skal teksten endres:
// a. Hvis tallet er delelig på 3, skal du skrive "Fizz" i stedet for tallet.
// b. Hvis tallet er delelig på 5, skal du skrive "Buzz" i stedet for tallet.
// c. Hvis tallet er delelig på både 3 og 5, skal du skrive "FizzBuzz".
// d. Hint: Modulusoperatoren (%) kan brukes for å sjekke om et tall er delelig.

// let r = 1;
// while (r <= 100) {
//     if (r % 3 === 0 && r % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (r % 3 === 0) {
//         console.log("Fizz");
//     } else if (r % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(r);
//     }
//     r++;
// }

// Oppgave 8
// Lag en While-løkke som skriver ut et rektangel laget av stjerner (*). For eksempel, et rektangel med 4 rader og 5 kolonner

// let rows = 4;
// let cols = 5;
// let s = 1;   
// while (s <= rows) {
//     let line = "";
//     let t = 1;
//     while (t <= cols) {
//         line += "*";
//         t++;
//     }
//     console.log(line);
//     s++;
// }   

// Oppgave 9
// Lag en While-løkke som skriver ut de første 10 tallene i Fibonacci-sekvensen

let a = 0;
let b = 1;
let count = 0;
while (count < 10) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    count++;
}