/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  const nome = pets[i];
  console.log(nome);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("es.1 ordinamento in ordine alfabetico", pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log("Es.3 reverse", pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primoanimale = pets.shift();
pets.push(primoanimale);
console.log("Es.4 Spostamento primo animale all'ultimo posto", pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const newObject = cars[i];
  newObject.licensePlate = "b";
}
console.log("esercizio 5 aggiuntaLicensplate ", cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const cars2 = {
  brand: "Alfaromeo",
  model: "giulia",
  color: "moonlight",
  trims: ["quadrifoglio", "2000", "r-"],
  licensePlate: "b",
};

cars.push(cars2);

for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  carObj.trims.pop();
}

console.log("esercizio 6 ", cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const jusTrims = [];
for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  jusTrims.push(carObj.trims[0]);
}

console.log("esercizio n 7", jusTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  if (carObj.color.charAt(0) === "b") {
    console.log("esercizio 8 ci sono:" + "Frizz");
  } else {
    console.log("esercizio 8 ci sono:" + "buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
const numeroPrescelto = [];
const counter = 0;
for (i = 0; i < numericArray.length; i++) {
  while (numericArray[i] === 32) {
    numeroPrescelto.push(numericArray[i]);

    break;
  }
}
console.log("esercizio numero 9  " + numeroPrescelto);
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alfabetoNum = [];

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alfabetoNum.push("1");
      break;
    case "b":
      alfabetoNum.push("2");
      break;
    case "c":
      alfabetoNum.push("3");
      break;
    case "d":
      alfabetoNum.push("4");
      break;
    case "e":
      alfabetoNum.push("5");
      break;
    case "f":
      alfabetoNum.push("6");
      break;
    case "g":
      alfabetoNum.push("7");
      break;
    case "h":
      alfabetoNum.push("8");
      break;
    case "i":
      alfabetoNum.push("9");
      break;
    case "l":
      alfabetoNum.push("10");
      break;
    case "m":
      alfabetoNum.push("11");
      break;
    case "n":
      alfabetoNum.push("12");
      break;
    case "o":
      alfabetoNum.push("13");
      break;
    case "p":
      alfabetoNum.push("14");
      break;
    case "q":
      alfabetoNum.push("15");
      break;
    case "r":
      alfabetoNum.push("15");
      break;
    case "s":
      alfabetoNum.push("17");
      break;
    case "t":
      alfabetoNum.push("18");
      break;
    case "u":
      alfabetoNum.push("19");
      break;
    case "v":
      alfabetoNum.push("20");
      break;
    case "z":
      alfabetoNum.push("21");
      break;
  }
}

console.log("esercizio numero 10:" + " " + alfabetoNum);
