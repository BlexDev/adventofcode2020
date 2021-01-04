import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task5.txt';
const fileReader = await Deno.open(filename);

const lines: string[] = [];

for await (const line of readLines(fileReader)) {
  lines.push(line);
}

const getRow = (code: string): number => {
  return parseInt(
    code
      .slice(0, 7 - code.length)
      .replaceAll('F', '0')
      .replaceAll('B', '1'),
    2
  );
};

const getColumn = (code: string): number => {
  return parseInt(
    code
      .substr(code.length - 3)
      .replaceAll('L', '0')
      .replaceAll('R', '1'),
    2
  );
};

const getId = (code: string): number => {
  return getRow(code) * 8 + getColumn(code);
};

console.log('First part: ');
console.log(
  lines
    .map(getId)
    .sort((a, b) => a - b)
    .pop()
);
console.log('Second part: ');
lines
  .map(getId)
  .sort((a, b) => a - b)
  .forEach((seatNumber, index, array) => {
    if (index + 1 < array.length) {
      if (seatNumber + 1 !== array[index + 1]) {
        console.log(array[index], array[index + 1]);
        console.log('Missing: ', array[index] + 1);
      }
    }
  });
