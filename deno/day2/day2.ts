import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task2.txt';
const fileReader = await Deno.open(filename);

const lines: string[] = [];

for await (const line of readLines(fileReader)) {
  lines.push(line);
}

const policyRegEx = new RegExp('(.*)-(.*) (.): (.*)');

const isPasswordValidTask1 = (password: string): boolean => {
  const policyMatches: string[] | null = password.match(policyRegEx);
  if (policyMatches) {
    const charCounter = policyMatches[4]
      .split('')
      .filter((char) => char === policyMatches[3]).length;
    return charCounter >= +policyMatches[1] && charCounter <= +policyMatches[2];
  } else {
    return false;
  }
};

const isPasswordValidTask2 = (password: string): boolean => {
  const policyMatches: string[] | null = password.match(policyRegEx);
  if (policyMatches) {
    return (
      (policyMatches[4][+policyMatches[1] - 1] === policyMatches[3]) !==
      (policyMatches[4][+policyMatches[2] - 1] === policyMatches[3])
    );
  } else {
    return false;
  }
};

console.log('Task 1:');
console.log(lines.filter(isPasswordValidTask1).length);
console.log('Task 2:');
console.log(lines.filter(isPasswordValidTask2).length);
