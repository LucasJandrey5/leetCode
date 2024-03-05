function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  let s: string = x.toString();

  let v: string[] = s.split("");

  v.reverse();

  let r = v.join("");

  return r === s;
}

function isPalindromeWithoutTransformString(x: number): boolean {
  const num = x;

  if (x < 0) return false;

  let r = 0;
  while (x > 0) {
    const y = x % 10;
    x = Math.floor(x / 10);
    r = r * 10 + y;
  }

  return num === r;
}

const t = 121;

console.log(isPalindrome(t));
console.log(isPalindromeWithoutTransformString(t));
