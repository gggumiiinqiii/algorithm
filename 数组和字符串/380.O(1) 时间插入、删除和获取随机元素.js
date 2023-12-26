var RandomizedSet = function () {
  this.arrVal = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.arrVal.get(val) != undefined) {
    return false;
  } else {
    this.arrVal.set(val, val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.arrVal.get(val) !== undefined) {
    this.arrVal.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let length = this.arrVal.size;
  let randomIndex = Math.floor(Math.random() * length);
  let gg = [...this.arrVal];
  return gg[randomIndex][1];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// ["RandomizedSet","remove","remove","insert","getRandom","remove","insert"]
// [[],[0],[0],[0],[],[0],[0]]
