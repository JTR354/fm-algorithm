describe('bit', () => {
  describe('front-end', () => {
    const TEXT = 1; // 0b001
    const ELEMENT = 1 << 1; // 0b010
    const STYLE = 1 << 2; // 0b100

    let vnodeType = STYLE | ELEMENT;
    test('授权 |', () => {
      /**0b100 | 0b010 = 0b110 */
      expect(vnodeType).toBe(0b110);
    });
    test('鉴权 &', () => {
      /**0b110 & 0b001 = 0b000 false */
      expect(!!(vnodeType & TEXT)).toBe(false);
      /**0b110 & 0b010 = 0b010 2 true */
      expect(vnodeType & ELEMENT).toBe(0b010);
      expect(!!(vnodeType & ELEMENT)).toBe(true);
      /**0b110 & 0b100 = 0b100 4 true */
      expect(vnodeType & STYLE).toBe(0b100);
      expect(!!(vnodeType & STYLE)).toBe(true);
    });
    test('删除权限 ^', () => {
      vnodeType ^= ELEMENT;
      /**0b110 ^ 0b010 = 0b100 */
      expect(vnodeType).toBe(0b100);
      expect(!!(vnodeType & TEXT)).toBe(false);
      expect(!!(vnodeType & ELEMENT)).toBe(false);
      expect(!!(vnodeType & STYLE)).toBe(true);
    });
  });
});
