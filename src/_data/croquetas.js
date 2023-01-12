var filename = "./src/_data/croquetas.csv";
console.log( "*** Empezando cocinado de croquetas desde " + filename + " ***" );

const fs = require("fs");
const Papa = require('papaparse');

const croquetas = [];

function readCSV() {
  try {
    const input = fs.readFileSync( filename, 'utf8' );
    Papa.parse(input, {
      header: true,
      columns: true,
      skipEmptyLines: true,
      step: function(row) {
        console.group ();
        console.info ( row.data['Titulo'] );
        croquetas.push( row.data );
        console.groupEnd ();
      },
      complete: function () {
      }
    });

    console.log(`*** ${croquetas.length} croquetas encontradas. ***`);
    return croquetas;

  } catch (err) {
    if (err) {
      console.error(err)
      return
    }
  }
}

module.exports = function () {
  const data = readCSV();
  // console.log (data)
  return data;
};