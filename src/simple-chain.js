const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    this.chain.push(value)
    return this;
  },
  removeLink(position) {
    const index = position - 1;
    if (index >= this.chain.length || index < 0 || !Number.isInteger(position) || typeof position !== "number") {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = "";
    for (let i = 0; i < this.chain.length - 1; i += 1) {
      str += `( ${this.chain[i]} )~~`;
    }
    str += `( ${this.chain[this.chain.length - 1]} )`;
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
