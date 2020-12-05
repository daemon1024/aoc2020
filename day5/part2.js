const data = await Deno.readTextFile("./input.txt");
let passportDB = data.split("\n");

let seatids = [];

function seatid(seat) {
  let row = 64;
  let column = 4;
  for (let i = 0; i < seat.length; i++) {
    if (i < 7) {
      if (seat[i] == "F") {
        row -= 64 / (2 ** (i + 1));
      } else {
        row += 64 / (2 ** (i + 1));
      }
    } else {
      if (seat[i] == "L") {
        column -= 4 / (2 ** (i - 6));
      } else {
        column += 4 / (2 ** (i - 6));
      }
    }
  }
  row = Math.floor(row);
  column = Math.floor(column);
  return row * 8 + column;
}

passportDB.map((seat) => seatids.push(seatid(seat)));

seatids.sort((a, b) => a - b);

for (let i = seatids[0]; seatids[i - seatids[0]]; i++) {
  if (i != seatids[i - seatids[0]]) {
    seatids.includes(i) || console.log(i);
    break;
  }
}
