//www.youtube.com/watch?v=0I6IL3TnIZs&ab_channel=TECHDOSE

https: var groupAnagrams = function (strs) {
  let anagram = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join();
    if (anagram.has(sorted)) {
      anagram.set(sorted, [...anagram.get(sorted), strs[i]]);
    } else {
      anagram.set(sorted, [strs[i]]);
    }
  }
  return Array.from(anagram.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// TC - O(nklogn)
// SC - O(n)
