var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.get(key)) this.map.set(key, []);
  let values = this.map.get(key);
  values[timestamp] = value; // when printed out, the <1 empty item> means index was skipped
  // console.log(this.map)
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) return "";
  let values = this.map.get(key);

  for (let i = timestamp; i >= 0; i--) {
    if (values[i] !== undefined) return values[i];
  }

  return "";
};

/**
 * O(1) set since map.set is O(1)
 * O(K) time for get since it depends on how many indexes are present in values array
 */

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
