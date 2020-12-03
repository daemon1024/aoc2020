const data = await Deno.readTextFile("./input.txt");

let passwordDB = data.split("\n");

passwordDB = passwordDB.map((db) => {
  db = db.split(" ");
  db[0] = db[0].split("-");
  db[0] = db[0].map(Number);
  return db;
});

let validCount = 0;

passwordDB.map(db => {
    ((db[2][db[0][0]-1]==db[1][0] && db[2][db[0][1]-1]!=db[1][0]) || (db[2][db[0][0]-1]!=db[1][0] && db[2][db[0][1]-1]==db[1][0])) && validCount++;
})

console.log(validCount);