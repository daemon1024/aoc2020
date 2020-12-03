const data = await Deno.readTextFile("./input.txt");
let numbers = data.split("\n");
numbers = numbers.map(Number);
numbers.some((v1) =>
  numbers.some((v2) => v1 + v2 == 2020 && (console.log(v1 * v2) || true))
);
