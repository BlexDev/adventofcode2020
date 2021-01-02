import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task1.txt';
const fileReader = await Deno.open(filename);

const numbers: number[] = [];

for await (const value of readLines(fileReader)) {
  numbers.push(+value);
}

const sortedAndFilteredNumbers = numbers
  .sort((a, b) => a - b)
  .filter((number) => number <= 2020);

const getArraySum = (arr: number[]): number =>
  arr.reduce((pv, cv) => pv + cv, 0);

const searchFunction = (
  numbers: number[],
  sumGoalNumber: number,
  sumGoal: number,
  currentRunIndex: number,
  currentNumberStack: number[]
) => {
  if (
    currentRunIndex < sumGoalNumber &&
    getArraySum(currentNumberStack) < sumGoal
  ) {
    numbers.forEach((number, index) => {
      const newNumberArray = numbers.slice(index, numbers.length);
      const newNumberStack = [...currentNumberStack, number];
      if (
        getArraySum(newNumberStack) === sumGoal &&
        newNumberStack.length === sumGoalNumber
      ) {
        console.log(newNumberStack.reduce((pv, cv) => pv * cv, 1));
      } else {
        searchFunction(
          newNumberArray,
          sumGoalNumber,
          sumGoal,
          currentRunIndex + 1,
          newNumberStack
        );
      }
    });
  }
};

console.log('First part: ');
searchFunction(sortedAndFilteredNumbers, 2, 2020, 0, []);
console.log('Second part: ');
searchFunction(sortedAndFilteredNumbers, 3, 2020, 0, []);
