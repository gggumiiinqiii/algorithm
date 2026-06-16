function backspaceCompare(s: string, t: string): boolean {
  let sarr: string[] = [];
  let tarr: string[] = [];
  const isEqual = (arr1: string[], arr2: string[]) =>
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index]);
  for (let sv of s) {
    if (sv !== "#") {
      sarr.push(sv);
    } else {
      sarr.pop();
    }
  }
  for (let tv of t) {
    if (tv !== "#") {
      tarr.push(tv);
    } else {
      tarr.pop();
    }
  }
  console.log(sarr, tarr);
  return isEqual(sarr, tarr);
}
backspaceCompare("ab#c", "ad#c");
