const chainMaker = {

  currentChain: [],

  getLength() {
    return this.currentChain.length;
  },
  addLink(value) {
    this.currentChain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.currentChain.length) {
      this.currentChain.splice(position - 1, 1)
      return this;
    }
    else{
      this.currentChain.length = 0;
      throw Error('Wrong link')
    }
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let res = this.currentChain.map(item => '( ' + item + ' )').join('~~');
    this.currentChain = [];
    return res;
  }
};

module.exports = chainMaker;