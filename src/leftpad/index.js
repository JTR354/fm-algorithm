exports.leftPad = function leftPad(str, length, ch) {
  let len = length - str.length;
  let total = '';
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // TODO WHY?
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len >>= 1;
  }
  // return ch.repeat(length - str.length) + str;
};
