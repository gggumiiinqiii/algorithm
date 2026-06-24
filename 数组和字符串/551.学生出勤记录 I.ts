function checkRecord(s: string): boolean {
  let result = false;
  let countA = 0;
  for (let word of s) {
    if (word == "A") {
      countA++;
    }
  }
  if (!/LLL/.test(s) && countA < 2) {
    result = true;
  }

  return result;
}
checkRecord("PPALLP");
