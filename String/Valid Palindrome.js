var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z\d]/g, "");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// TC - O(n)
// SC - O(1)
