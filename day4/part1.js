const data = await Deno.readTextFile("./input.txt");
let passportDB = data.split("\n\n");
passportDB = passportDB.map((db) => {
  db = db.split(/[ \n]/);
  db = db.map((field) => field.split(":"));
  db = db.map((field) => field[0]);
  return db;
});
let validCount = 0;
passportDB = passportDB.map((db) =>
  db.includes("byr") && db.includes("iyr") && db.includes("eyr") &&
  db.includes("hgt") && db.includes("hcl") && db.includes("ecl") &&
  db.includes("pid") && validCount++
);
console.log(validCount);
