function angleClock(hour: number, minutes: number): number {
  //分钟每分钟走6°  minutes*6
  //时钟每小时走30° ,每分钟再夺走30°/60 = 0.5 ° hourangle = (hour%12) *30+minutes*0.5
  const minuteAngel = minutes * 6;
  const hourangle = (hour % 12) * 30 + minutes * 0.5;
  const diff = Math.abs(hourangle - minuteAngel);
  return Math.min(diff, 360 - diff);
}
console.log(angleClock(12, 30));
