var MyCustomArray = /** @class */ (function () {
    function MyCustomArray(size) {
        this.data = {};
        this.length = size;
    }
    MyCustomArray.prototype.get = function (index) {
        return this.data[index];
    };
    MyCustomArray.prototype.set = function (index, value) {
        this.data[index] = value;
    };
    return MyCustomArray;
}());
var MyHashMap = /** @class */ (function () {
    function MyHashMap(initialSize) {
        if (initialSize === void 0) { initialSize = 10; }
        this.initialSize = initialSize;
        this.size = 0;
        this.buckets = new MyCustomArray(initialSize);
        // Initialize buckets with empty arrays
        for (var i = 0; i < initialSize; i++) {
            this.buckets.set(i, [undefined, undefined]);
        }
    }
    MyHashMap.prototype.hash = function (key) {
        var keyString = key.toString();
        var hash = 0;
        for (var i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }
        return hash % this.buckets.length;
    };
    MyHashMap.prototype.resize = function (newSize) {
        var oldBuckets = this.buckets;
        this.buckets = new MyCustomArray(newSize);
        this.size = 0;
        for (var i = 0; i < oldBuckets.length; i++) {
            var _a = oldBuckets.get(i) || [undefined, undefined], key = _a[0], value = _a[1];
            if (key !== undefined) {
                this.put(key, value);
            }
        }
    };
    MyHashMap.prototype.put = function (key, value) {
        var _a, _b;
        if (this.size >= this.buckets.length * 0.7) {
            this.resize(this.buckets.length * 2);
        }
        var index = this.hash(key);
        while (((_a = this.buckets.get(index)) === null || _a === void 0 ? void 0 : _a[0]) !== undefined) {
            if (((_b = this.buckets.get(index)) === null || _b === void 0 ? void 0 : _b[0]) === key) {
                break;
            }
            index = (index + 1) % this.buckets.length;
        }
        this.buckets.set(index, [key, value]);
        this.size++;
    };
    MyHashMap.prototype.get = function (key) {
        var _a, _b, _c;
        var index = this.hash(key);
        while (((_a = this.buckets.get(index)) === null || _a === void 0 ? void 0 : _a[0]) !== undefined) {
            if (((_b = this.buckets.get(index)) === null || _b === void 0 ? void 0 : _b[0]) === key) {
                return (_c = this.buckets.get(index)) === null || _c === void 0 ? void 0 : _c[1];
            }
            index = (index + 1) % this.buckets.length;
        }
        return undefined;
    };
    MyHashMap.prototype.remove = function (key) {
        var _a, _b, _c;
        var index = this.hash(key);
        while (((_a = this.buckets.get(index)) === null || _a === void 0 ? void 0 : _a[0]) !== undefined) {
            if (((_b = this.buckets.get(index)) === null || _b === void 0 ? void 0 : _b[0]) === key) {
                this.buckets.set(index, [undefined, undefined]);
                this.size--;
                // Rehash remaining items
                var currentIndex = (index + 1) % this.buckets.length;
                while (((_c = this.buckets.get(currentIndex)) === null || _c === void 0 ? void 0 : _c[0]) !== undefined) {
                    var _d = this.buckets.get(currentIndex) || [undefined, undefined], currentKey = _d[0], currentValue = _d[1];
                    this.buckets.set(currentIndex, [undefined, undefined]);
                    this.size--;
                    this.put(currentKey, currentValue);
                    currentIndex = (currentIndex + 1) % this.buckets.length;
                }
                if (this.size < this.buckets.length * 0.25 && this.buckets.length > this.initialSize) {
                    this.resize(Math.floor(this.buckets.length / 2));
                }
                return;
            }
            index = (index + 1) % this.buckets.length;
        }
    };
    MyHashMap.prototype.containsKey = function (key) {
        return this.get(key) !== undefined;
    };
    MyHashMap.prototype.getSize = function () {
        return this.size;
    };
    MyHashMap.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return MyHashMap;
}());
// Example usage:
var hashMap = new MyHashMap();
hashMap.put("one", 1);
hashMap.put("two", 2);
hashMap.put("three", 3);
console.log(hashMap.containsKey("two"));
console.log(hashMap.get("one"));
