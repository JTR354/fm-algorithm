exports.simplifyPath = function (path) {
  const paths = path.split('/');
  const result = [];
  for (let p of paths) {
    if (!p) continue;
    if (p === '..') {
      result.pop();
    } else if (!['/', '.'].includes(p)) {
      result.push(p);
    }
  }
  return '/' + result.join('/');
};
