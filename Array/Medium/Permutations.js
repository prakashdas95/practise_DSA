//https://www.youtube.com/watch?v=R3Sm9V2OSCo&ab_channel=Codebix
//https://leetcode.com/problems/permutations/solutions/685868/dfs-backtracking-python-java-javascript-picture/?orderBy=most_votes&languageTags=javascript
//https://www.youtube.com/watch?v=Nabbpl7y4Lo&ab_channel=ComputerBread

var permute = function (nums) {
  let result = [];

  backtrack(result, nums, [], []);
  return result;
};

function backtrack(result, nums, path, visited) {
  if (path.length === nums.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    result.push(Array.from(path));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // skip used letters
    if (visited[i] === true) continue;

    // add letter to permutation, mark letter as used
    path.push(nums[i]);
    visited[i] = true;
    backtrack(result, nums, path, visited);

    // remove letter from permutation, mark letter as unused
    path.pop();
    visited[i] = false;
  }
}

console.log(permute([1, 2, 3]));
