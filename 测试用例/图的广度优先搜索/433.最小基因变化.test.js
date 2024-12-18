//const minMutation = require("../../图的广度优先搜索/433.最小基因变化");
function minMutation(start, end, bank) {
  if (!bank.includes(end)) {
    return -1;
  }
  const visited = new Set();
  const chart = ["A", "C", "G", "T"];
  const queue = [[start, 0]];
  visited.add(start);
  //  console.log("11");
  while (queue.length > 0) {
    const [current, step] = queue.shift();
    console.log(current);
    if (current == end) {
      return step;
    }
    for (let i = 0; i < current.length; i++) {
      for (let char of chart) {
        if (char !== current[i]) {
          const next =
            current.slice(0, i) + char + current.slice(i + 1, start.length);
          //  console.log(next, current);
          if (bank.includes(next) && !visited.has(next)) {
            visited.add(next);
            queue.push([next, step + 1]);
          }
        }
      }
    }
  }
  return -1;
}

console.log(
  minMutation("AACCGGTT", "AAACGGTA", ' ["AACCGGTA","AACCGCTA","AAACGGTA"]')
);
