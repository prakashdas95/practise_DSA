// https://www.youtube.com/watch?v=OxbxP5_-Tcs&ab_channel=PheezxCoding

let validParentheses = function (s) {
  let stack = [];

  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] == "{") {
      stack.push("}");
    } else if (s[idx] == "[") {
      stack.push("]");
    } else if (s[idx] == "(") {
      stack.push(")");
      // if both are same well pop out above we have added closing for opening and we are checking both closing
    } else if (stack.length > 0 && stack[stack.length - 1] === s[idx]) {
      stack.pop();
    } else {
      // if not matching both return false
      return false;
    }
  }
  return !stack.length;
};

console.log(validParentheses("(){}"));

//TC - O(n)
//SC - O(n)
