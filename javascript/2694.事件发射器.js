/**
 * 找id，通过cb的字符串来找到索引，然后splice移除
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }

    return {
      unsubscribe: () => {
        let idx = this.events[eventName].findIndex(
          (cb) => cb.toString() === callback.toString()
        );
        this.events[eventName].splice(idx, 1);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    try {
      return this.events[eventName].map((callbacka) => callbacka(...args));
    } catch {
      return [];
    }
  }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
sub2.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5])); // [7]
