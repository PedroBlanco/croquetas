var filename = "./src/_data/croquetas.csv";
console.log( "*** Empezando cocinado de croquetas desde " + filename + " ***" );

const parse = require("csv-parse/lib/sync");
const fs = require("fs");

function readCSV() {
  const input = fs.readFileSync( filename );
  const records = parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  console.log(`${records.length} croquetas encontradas.`);
  return records;
}

module.exports = function () {
  const data = readCSV();
  return data;
};