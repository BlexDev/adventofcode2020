import { readLines } from 'https://deno.land/std@0.83.0/io/mod.ts';

interface Passport {
  byr: string;
  iyr: string;
  eyr: string;
  hgt: string;
  hcl: string;
  ecl: string;
  pid: string;
  cid?: string;
}

const filename = './files/task4.txt';
const fileReader = await Deno.open(filename);

const passports: Passport[] = [];
const passportRegex = new RegExp('((.+):(.+))+');

let currentPassport = '';

for await (const line of readLines(fileReader)) {
  if (line) {
    currentPassport += line + ' ';
  } else {
    currentPassport = currentPassport.trimEnd();
    passports.push(
      JSON.parse(
        `{"${currentPassport.replaceAll(':', '":"').replaceAll(' ', '","')}"}`
      )
    );
    currentPassport = '';
  }
}

const isPassportValid = (passport: Passport): boolean => {
  return (
    !!passport.byr &&
    !!passport.iyr &&
    !!passport.eyr &&
    !!passport.hgt &&
    !!passport.hcl &&
    !!passport.ecl &&
    !!passport.pid
  );
};

console.log(passports.filter((passport) => isPassportValid(passport)).length);
