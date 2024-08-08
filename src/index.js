module.exports = function check(str, bracketsConfig) {
  const mapOfBrackets = new Map(bracketsConfig);
  const openBrackets = new Set(mapOfBrackets.keys());
  const closeBrackets = new Set(mapOfBrackets.values());
  let stack = [];

  for (const char of str) {
    if (openBrackets.has(char)) {
      if (closeBrackets.has(char) && stack[stack.length - 1] === char && stack.length > 0) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (stack.length === 0) return false;
      if (mapOfBrackets.get(stack.pop()) !== char) return false;
    }
  }
  return (stack.length === 0) ? true : false;
}
