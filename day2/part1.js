const data = await Deno.readTextFile("./input.txt");

let passwordDB = data.split("\n");

passwordDB = passwordDB.map((db) => {
  db = db.split(" ");
  db[0] = db[0].split("-");
  db[0] = db[0].map(Number);
  return db;
});

let validCount = 0;

const countLetter = (letter, password) => {
  let count = 0;
  for (const ch of password) letter == ch && count++;
  return count;
};

passwordDB.map((db) => {
  let chCount = countLetter(db[1][0], db[2]);
  chCount >= db[0][0] && chCount <= db[0][1] && validCount++;
});

console.log(validCount);
