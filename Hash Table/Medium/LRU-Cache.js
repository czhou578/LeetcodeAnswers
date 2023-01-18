/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map()
    // this.map.size = capacity
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let existingValue = this.map.get(key)
        this.put(key, existingValue)
        return existingValue
    }

    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }

    this.map.set(key, value)

    if (this.map.size > this.capacity) {
        let lru = this.map.keys().next().value
        this.map.delete(lru)
    }
    // if (this.map.has(key)) {
    //     this.map.set(this.map.get(key), value)
    // } else {
    //     this.map.set(key, value)
    // }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */