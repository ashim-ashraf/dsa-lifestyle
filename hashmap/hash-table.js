class hashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
        return this;
    }
}


let myHashTable = new hashTable()
myHashTable.set("nails", 100);
myHashTable.set("tile", 50);
myHashTable.set("lumber", 80);
myHashTable.set("bolts", 200);
myHashTable.set("screws", 140);

myHashTable.printTable();    
