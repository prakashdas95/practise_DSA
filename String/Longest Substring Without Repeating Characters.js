//www.youtube.com/watch?v=gHNMSeeu_4Q&ab_channel=AlgorithmsMadeEasy

// function str(s) {
//   let l = 0;
//   let r = 0;
//   let count = 0;
//   let len = s.length;
//   let hash = new Map();

//   while (r < len) {
//     if (hash.has(s[r])) {
//       if (l <= hash.get(s[r])) {
//         l = hash.get(s[r]) + 1;
//       }
//     } else {
//       hash.set(s[r], r);
//       count = Math.max(count, r - l + 1);
//     }
//     r++;
//   }
//   return count;
// }

// Working solution
//www.youtube.com/watch?v=hVPCWIOMxrk&ab_channel=TechnicalSuneja
function str(s) {
  let l = 0;
  let r = 0;
  let count = 0;
  let len = s.length;
  let hash = new Set();

  while (r < len) {
    if (!hash.has(s[r])) {
      hash.add(s[r]);
      r++;
      count = Math.max(count, hash.size);
    } else {
      hash.delete(s[l]);
      l++;
    }
  }
  return count;
}
// console.log(str("adbabcbb"));
// console.log(str("pwwkew"));
console.log(str("tmmzuxt"));

// TC - O(n)
// SC - O(n)
