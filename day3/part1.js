const data = await Deno.readTextFile("./input.txt");
let area = data.split("\n");
let i = 0, j = 0, treeCount = 0;
while (i < area.length) {
  area[i][j] == "#" && treeCount++;
  i += 1;
  j = (j + 3) % area[0].length;
}
console.log(treeCount);
