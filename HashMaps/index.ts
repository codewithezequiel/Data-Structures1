class MyCustomArray<T> {
    private data: { [index: number]: T };
    public length: number;
  
    constructor(size: number) {
        this.data = {};
        this.length = size;
    }
  
    get(index: number): T | undefined {
        return this.data[index];
    }
  
    set(index: number, value: T): void {
        this.data[index] = value;
    }
}

class MyHashMap<K, V> {
    private readonly initialSize: number;
    private size: number;
    private buckets: MyCustomArray<[K | undefined, V | undefined]>;

    constructor(initialSize: number = 10) {
        this.initialSize = initialSize;
        this.size = 0;
        this.buckets = new MyCustomArray(initialSize)
    

        // Initialize buckets with empty arrays
        for (let i = 0; i < initialSize; i++) {
            this.buckets.set(i, [undefined, undefined])
        }
    }
    
    private hash(key: K): number {
        const keyString = key!.toString();
        let hash = 0;
        
        for (let i = 0; i < keyString.length; i++) {
            hash += keyString.charCodeAt(i);
        }

        return hash % this.buckets.length;
    }

    private resize(newSize: number): void {
        const oldBuckets = this.buckets;
        this.buckets = new MyCustomArray(newSize);
        this.size = 0;
    
        for (let i = 0; i < oldBuckets.length; i++) {
            const [key, value] = oldBuckets.get(i) || [undefined, undefined];
            if (key !== undefined) {
                this.put(key, value!);
            }
        }
    }
    
    put(key: K, value: V): void {
        if (this.size >= this.buckets.length * 0.7) {
            this.resize(this.buckets.length * 2);
        }
    
        let index = this.hash(key);
    
        while (this.buckets.get(index)?.[0] !== undefined) {
            if (this.buckets.get(index)?.[0] === key) {
                break;
            }
            index = (index + 1) % this.buckets.length;
        }
    
        this.buckets.set(index, [key, value]);
        this.size++;
    }

    get(key: K): V | undefined {
        let index = this.hash(key);
    
        while (this.buckets.get(index)?.[0] !== undefined) {
            if (this.buckets.get(index)?.[0] === key) {
                return this.buckets.get(index)?.[1];
            }
            index = (index + 1) % this.buckets.length;
        }
    
        return undefined;
    }
    
    remove(key: K): void {
        let index = this.hash(key);
    
        while (this.buckets.get(index)?.[0] !== undefined) {
            if (this.buckets.get(index)?.[0] === key) {
                this.buckets.set(index, [undefined, undefined]);
                this.size--;
    
                // Rehash remaining items
                let currentIndex = (index + 1) % this.buckets.length;
                while (this.buckets.get(currentIndex)?.[0] !== undefined) {
                    const [currentKey, currentValue] = this.buckets.get(currentIndex) || [undefined, undefined];
                    this.buckets.set(currentIndex, [undefined, undefined]);
                    this.size--;
                    this.put(currentKey!, currentValue!);
                    currentIndex = (currentIndex + 1) % this.buckets.length;
                }
    
                if (this.size < this.buckets.length * 0.25 && this.buckets.length > this.initialSize) {
                    this.resize(Math.floor(this.buckets.length / 2));
                }
    
                return;
            }
            index = (index + 1) % this.buckets.length;
        }
    }


    containsKey(key: K): boolean {
        return this.get(key) !== undefined;
    }
    
    getSize(): number {
        return this.size;
    }
    
    isEmpty(): boolean {
        return this.size === 0;
    }
}
    
    // Example usage:
const hashMap = new MyHashMap<string, number>();
    
hashMap.put("one", 1);
hashMap.put("two", 2);
hashMap.put("three", 3);
console.log(hashMap.containsKey("two"))
console.log(hashMap.get("one"));

   

