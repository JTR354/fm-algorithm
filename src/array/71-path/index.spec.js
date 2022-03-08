const { simplifyPath } = require('.');
describe('array', () => {
  describe('71-path', () => {
    test('demo1', () => {
      const path = '/home/';
      const output = '/home';
      expect(simplifyPath(path)).toBe(output);
    });

    test('demo2', () => {
      const path = '/../';
      const output = '/';
      expect(simplifyPath(path)).toBe(output);
    });

    test('demo3', () => {
      const path = '/home//foo/';
      const output = '/home/foo';
      expect(simplifyPath(path)).toBe(output);
    });

    test('demo4', () => {
      const path = '/a/./b/../../c/';
      const output = '/c';
      expect(simplifyPath(path)).toBe(output);
    });
  });
});
