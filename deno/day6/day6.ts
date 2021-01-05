import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task6.txt';
const fileReader = await Deno.open(filename);

const lines: string[] = [];

for await (const line of readLines(fileReader)) {
  lines.push(line);
}

const getGroupedArray = (lines: string[]): string[] => {
  return lines.join(',').replaceAll(',,', ';').split(';');
};

const getPositiveAnswers = (line: string): Set<string> => {
  const charSet = new Set<string>();
  line.split(',').forEach((personAnswer: string) => {
    for (const char of personAnswer) {
      charSet.add(char);
    }
  });
  return charSet;
};

const getSumOfAnswers = (answerSet: Set<string>[]): number => {
  return answerSet.reduce((pv, cv) => pv + cv.size, 0);
};

const getNumberOfPositiveAnsweredByEverybody = (line: string): number => {
  const positiveAnswers = getPositiveAnswers(line);
  return Array.from(positiveAnswers)
    .filter((answer: string) =>
      line.split(',').every((value) => value.includes(answer))
    )
    .reduce((pv, cv) => pv + cv.length, 0);
};

console.log('First Task: ');
console.log(getSumOfAnswers(getGroupedArray(lines).map(getPositiveAnswers)));
console.log('Second Task:');
console.log(
  getGroupedArray(lines)
    .map(getNumberOfPositiveAnsweredByEverybody)
    .reduce((pv, cv) => pv + cv, 0)
);
