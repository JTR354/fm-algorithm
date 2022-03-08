const { isValid } = require('.');
describe('array', () => {
  describe('20-valid-parenthese', () => {
    test('demo1', () => {
      const s = '()';
      const r = true;
      expect(isValid(s)).toBe(r);
    });
    test('demo2', () => {
      const s = '()[]{}';
      const r = true;
      expect(isValid(s)).toBe(r);
    });
    test('demo3', () => {
      const s = '(]';
      const r = false;
      expect(isValid(s)).toBe(r);
    });
    test('demo4', () => {
      const s = '(){}}{';
      const r = false;
      expect(isValid(s)).toBe(r);
    });
  });
});
