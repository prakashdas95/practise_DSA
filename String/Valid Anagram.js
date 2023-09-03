var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

//TC - Nlogn + mlogm

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let count = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!count.get(s[i])) count.set(s[i], 0);
    if (!count.get(t[i])) count.set(t[i], 0);

    count.set(s[i], count.get(s[i]) + 1);
    count.set(t[i], count.get(t[i]) - 1);
  }

  for ([key, value] of count) {
    if (value !== 0) return false;
  }
  return true;
};

isAnagram("rat", "car");

// TC - O(n)
// SC - O(1)
