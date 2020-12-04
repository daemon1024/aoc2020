const data = await Deno.readTextFile("./input.txt");
let numbers = data.split("\n");
numbers = numbers.map(Number);
numbers.some((v1) =>
  numbers.includes(2020 - v1) && (console.log(v1 * (2020 - v1)) || true)
);
