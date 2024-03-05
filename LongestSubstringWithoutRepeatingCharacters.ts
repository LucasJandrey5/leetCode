function lengthOfLongestSubstring(s: string): number {
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    if (length >= s.length - i) return length;
    let arr: string[] = [];
    for (let j = i; j < s.length; j++) {
      const char = s[j];

      if (!arr.find((item) => item === char)) {
        arr.push(char);
        continue;
      } else {
        break;
      }
    }
    if (length < arr.length) length = arr.length;
    console.log(arr);
  }

  return length;
}

console.log(lengthOfLongestSubstring("aabcaabcdae"));
