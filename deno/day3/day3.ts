import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task3.txt';
const fileReader = await Deno.open(filename);

const lines: string[] = [];

for await (const line of readLines(fileReader)) {
  lines.push(line);
}

const hitSomething = (line: string, right: number): boolean => {
  return getCharFromInfinityLine(line, right) === '#';
};

const getCharFromInfinityLine = (line: string, number: number): string => {
  return line[number % line.length];
};

console.log('Task 1:');
console.log(
  lines.map((line, index) => hitSomething(line, index * 3)).filter(Boolean)
    .length
);
