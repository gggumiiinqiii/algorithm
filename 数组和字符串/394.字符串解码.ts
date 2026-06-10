function decodeString(s: string): string {
  let numStack = [], //存数字
    strStack = []; //存字符串
  let num = 0,
    str = "";
  for (let ch of s) {
    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch); //*10是因为会有大于10的num
    } else if (ch == "[") {
      //入栈
      numStack.push(num);
      num = 0;
      strStack.push(str);
      str = "";
    } else if (ch == "]") {
      //出栈
      let times = numStack.pop() as number;
      str = strStack.pop() + str.repeat(times);
    } else {
      str += ch;
    }
  }
  return str;
}
// console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
