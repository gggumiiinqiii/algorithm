function leastInterval(tasks: string[], n: number): number {
  let map = new Map();
  let maxCount = 0; //出现次数最多的那个次数
  let maxFreq = 0; //有多少个不同任务都达到了这个最多次数

  for (let task of tasks) {
    if (map.has(task)) {
      map.set(task, map.get(task) + 1);
    } else {
      map.set(task, 1);
    }
  }
  map.forEach((item) => {
    maxCount = Math.max(item, maxCount);
  });
  map.forEach((item) => {
    if (maxCount == item) {
      maxFreq++;
    }
  });
  console.log(maxCount, maxFreq);
  //
  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxFreq);
}
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3));
