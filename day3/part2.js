const data = await Deno.readTextFile("./input.txt");
let area = data.split("\n");

const countTrees = (right, down) => {
  let i = 0, j = 0, treeCount = 0;
  while (j < area.length) {
    area[j][i] == "#" && treeCount++;
    i = (i + right) % area[0].length;
    j += down;
  }
  return treeCount;
};

let slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
slopes = slopes.map(([right, down]) => countTrees(right, down));
console.log(slopes.reduce((a, b) => a * b));
