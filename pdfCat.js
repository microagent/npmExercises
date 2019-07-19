const catFacts = require("cat-facts");

const PDFDocument = require("pdfkit");
const fs = require("fs");

let randomFact = catFacts.random();
// 'Grown cats have 30 teeth'

console.log(randomFact);

// Create a document
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream("/Users/aklein/Downloads/catFact.pdf"));

doc
  .font("Helvetica")
  .fontSize(25)
  .text(randomFact, 100, 100);

// Finalize PDF file
doc.end();
