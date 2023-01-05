
var RandomizedSet = function() {
    this.map = {}
    this.values = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map[val] === undefined) {
        this.map[val] = this.values.length
        this.values.push(val)
        return true
    }

    return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map[val] !== undefined) {
        const index = this.map[val]
        delete this.map[val]
        const last = this.values.pop()
        if (index === this.values.length) return true
        this.map[last] = index
        this.values[index] = last
        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const length = this.values.length
    const result = this.values[Math.floor(Math.random() * length)]
    return result
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */