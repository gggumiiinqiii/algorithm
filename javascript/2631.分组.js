/**
 * @param {Function} fn
 * @return {Object}
 * 原型函数里面的this就是数组的值，
 * hasOwnProperty表示是否是对象的自有属性，而不是继承来的属性
 */
Array.prototype.groupBy = function (fn) {
  let obj = {};

  //console.log(this);
  for (let val of this) {
    let key = String(fn(val));
    console.log(key);
    if (obj.hasOwnProperty(key)) {
      obj[key].push(val);
    } else {
      obj[key] = [val];
    }
  }
  console.log(obj);
  return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
// [1, 2, 3].groupBy(String);
let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
fn = function (item) {
  return item.id;
};
array.groupBy(fn);
