exports.isPowerOfTwo = (n) => {
  while (n > 1) {
    n = n / 2;
  }
  return n === 1;
};

exports.isPowerOfTwo2 = (n) => {
  return n >= 1 && (n & (n - 1)) === 0;
};

/**
 * 因为2^n一定是高位为1其他位都是0, 所以只要2^n和2^n-1相与之后为0,则一定是2的幂次放
 * 即:
 * 0b1000
 * &
 * 0b0001
 * =
 * 0b0000
 *
 * [位运算（&、|、^、~、>>、<<）](https://www.runoob.com/w3cnote/bit-operation.html)
 * & 与 都为1时才为1
 * | 或 都为0时才为0
 * ^ 异或 相同为0,相异为1
 * ~ 取反 0变1, 1变0
 */
