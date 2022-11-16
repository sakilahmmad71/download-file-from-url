/**
 * @param {Integer} length return generated random string length
 * @return {String}
 */

const generateRandomString = (length = 16) => {
  const min = 16;
  const max = 32;
  let str = '';

  for (let i = 0; i++ < length;) {
    let random = (Math.random() * (max - min) + min) << 0;
    str += String.fromCharCode((random += random > 9 ? (random < 40 ? 60 : 65) : 55));
  }

  return str;
};

export default generateRandomString;
