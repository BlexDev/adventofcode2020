import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

const filename = './files/task2.txt';
const fileReader = await Deno.open(filename);

const lines: string[] = [];

for await (const line of readLines(fileReader)) {
  lines.push(line);
}
