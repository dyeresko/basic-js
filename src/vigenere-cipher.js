const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reverse = true;
  constructor(r) {
    this.reverse = r;
  }
  encrypt(message, key) {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let newKey = "";
    let i = 0;
    const newMessage = message.toUpperCase();
    const resultArray = [];
    const aCharCode = "A".charCodeAt(0);
    let j = 0;
    while (newKey.length !== newMessage.length) {
      newKey += key[i % key.length];
      i += 1;
    }
    newKey = newKey.toUpperCase();
    for (let i = 0; i < newMessage.length; i += 1) {
      if ((/[a-zA-Z]/.test(newMessage[i]))) {
        const shift = newKey.charCodeAt(j) - aCharCode;
        const newCharacter = String.fromCharCode((newMessage.charCodeAt(i) - aCharCode + shift) % 26 + aCharCode);
        resultArray.push(newCharacter);
        j += 1;
      } else {
        resultArray.push(newMessage[i]);
      }
    }
    return this.reverse ? resultArray.reverse().join("") : resultArray.join("");
  }
  decrypt(message, key) {
    if (arguments[0] === undefined || arguments[1] === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let newKey = "";
    let i = 0;
    const newMessage = message.toUpperCase();
    const resultArray = [];
    const aCharCode = "A".charCodeAt(0);
    let j = 0;
    while (newKey.length !== newMessage.length) {
      newKey += key[i % key.length];
      i += 1;
    }
    newKey = newKey.toUpperCase();
    for (let i = 0; i < newMessage.length; i += 1) {
      if ((/[a-zA-Z]/.test(newMessage[i]))) {
        const shift = newKey.charCodeAt(j) - aCharCode;
        const newCharacter = String.fromCharCode((newMessage.charCodeAt(i) - aCharCode - shift + 26) % 26 + aCharCode);
        resultArray.push(newCharacter);
        j += 1;
      } else {
        resultArray.push(newMessage[i]);
      }
    }
    return this.reverse ? resultArray.reverse().join("") : resultArray.join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
