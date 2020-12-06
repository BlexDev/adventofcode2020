const helper = require('./helper');

const lines = helper.fileReader('./day1/testinput.txt').then(console.log);

const test = () => {
  console.log(lines);
};

module.exports = { test };
