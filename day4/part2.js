const data = await Deno.readTextFile("./input.txt");
let passportDB = data.split("\n\n");

passportDB = passportDB.map((db) => {
  db = db.split(/[ \n]/);
  db = db.map((field) => field.split(":"));
  let keys = {};
  db.map((field) => keys[field[0]] = field[1]);
  return keys;
});

function byrValidate(byr) {
  return byr >= 1920 && byr <= 2002 ? true : false;
}

function iyrValidate(iyr) {
  return iyr >= 2010 && iyr <= 2020 ? true : false;
}

function eyrValidate(eyr) {
  return eyr >= 2020 && eyr <= 2030 ? true : false;
}

function hgtValidate(hgt) {
  hgt = String(hgt);
  if (hgt.includes("cm")) {
    hgt = Number(hgt.replace("cm", ""));
    return hgt >= 150 && hgt <= 193 ? true : false;
  } else if (hgt.includes("in")) {
    hgt = Number(hgt.replace("in", ""));
    return hgt >= 59 && hgt <= 76 ? true : false;
  }
  return false;
}

function hclValidate(hcl) {
  const hexRegex = /^#[A-Fa-f0-9]{6}$/;
  return hexRegex.test(String(hcl)) ? true : false;
}

function eclValidate(ecl) {
  let colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
  return colors.includes(ecl) ? true : false;
}

function pidValidate(pid) {
  return String(pid).length == 9 ? true : false;
}

let validCount = 0;
let pass = true;

passportDB.map((db) =>
  db.byr && byrValidate(db.byr) && db.iyr && iyrValidate(db.iyr) && db.eyr &&
  eyrValidate(db.eyr) && db.hgt && hgtValidate(db.hgt) && db.hcl &&
  hclValidate(db.hcl) && db.ecl && eclValidate(db.ecl) && db.pid &&
  pidValidate(db.pid) && validCount++
);
console.log(validCount);
