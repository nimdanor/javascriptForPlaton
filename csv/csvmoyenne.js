



// ATTENTION IL FAUT VERIFIER QUE LE MODULE papaparse est sur la sandbox 

// idée  : 1. on récupère des notes dans un fichier csv a fournir 
// On trouve la colone des notes et l'on fait la moyenne de ces notes que l'on affiche 

const Papa = require("papaparse"),
  fs = require("fs");


// 1. on récupère des notes dans un fichier csv a fournir
const file = fs.readFileSync("notes.csv", "utf8");
// 2. On trouve la colone des notes
const data = Papa.parse(file, {skipEmptyLines: true, header: true });
const notes = data.data.map((row) => row.note);
// 3. on fait la moyenne de ces notes que l'on affiche
const moyenne = notes.reduce((acc, note) => acc + parseFloat(note), 0) / notes.length;
console.log(moyenne);
