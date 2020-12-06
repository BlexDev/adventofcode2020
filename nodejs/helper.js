var reader = require('buffered-reader');
var DataReader = reader.DataReader;

let lineStringArray = [];

let fileReader = async (fileName) => {
  return new DataReader(fileName, { encoding: 'utf8' })
    .on('error', function (error) {
      console.log(error);
    })
    .on('line', function (line) {
      lineStringArray.push(line);
    })
    .on('end', async function () {
      return lineStringArray;
    })
    .read();
};

module.exports = { fileReader };
