console.group("Gruppe A");
console.log("Besked 1 i Gruppe A");
console.log("Besked 2 i Gruppe A");
console.groupEnd();





console.log("Dette er en log-meddelelse.");

console.info("Dette er en informationsmeddelelse.");

console.debug("Dette er en debugging-meddelelse.");



const data = [
    { Navn: "Alice", Alder: 30 },
    { Navn: "Bob", Alder: 25 },
];

console.log(data);
console.table(data);

console.clear();

const x = '11';


console.assert(x == 10, "x er ikke lig med 10");