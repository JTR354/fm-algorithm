exports.isValid = function (s) {
  /**左括号进栈,有括号出栈 */
  const config = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  const result = [];
  for (let char of s) {
    const p = config[char];
    if (!p) {
      result.push(char);
      continue;
    }
    if (p !== result.pop()) return false;
  }
  return !result.length;
};
