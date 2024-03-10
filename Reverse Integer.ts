function reverse(x: number): number {
  let r: number = parseInt(String(Math.abs(x)).split("").reverse().join(""));
  return r > 0x7fffffff ? 0 : x < 0 ? -r : r;
}

console.log(reverse(-2147483648));
//[-231, 231 - 1]
