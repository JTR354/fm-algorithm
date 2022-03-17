const { leftPad } = require('.');
describe('left pad', () => {
  it('demo1', () => {
    expect(leftPad('hello', 12, '0')).toBe('0000000hello');
  });
});
