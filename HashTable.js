class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    var arrVal = this._hash(key);

    if(!this.keyMap[arrVal]) {
      this.keyMap[arrVal] = [];
    }
    this.keyMap[arrVal].push([key, value]);
  }

  get(key) {
    var arrVal = this._hash(key);

    if(!this.keyMap[arrVal]) {
      return undefined;
    }
    for (var i = 0; i < this.keyMap[arrVal].length; i++) {
      if(this.keyMap[arrVal][i][0] === key) {
        return this.keyMap[arrVal][i][1];
      }
    }

    return undefined;
  }

  keys() {
    var arr = this.keyMap;
    var array = [];

    for (var i = 0; i < arr.length; i++) {
      if(arr[i]) {
        var arr2 = arr[i];
        for (var j = 0; j < arr2.length; j++) {
          array.push(arr2[j][0]);
        }
      }
    }

    return array;
  }

  values() {
    var arr = this.keyMap;
    var array = [];

    for (var i = 0; i < arr.length; i++) {
      if(arr[i]) {
        var arr2 = arr[i];
        for (var j = 0; j < arr2.length; j++) {
          if (!array.includes(arr2[j][1])) {
            array.push(arr2[j][1]);
          }
        }
      }
    }

    return array;
  }
}


var test = new HashTable(17);
test.set("maroon","#800000")
test.set("yellow","#FFFF00")
test.set("olive","#808000")
test.set("salmon","#FA8072")
test.set("ligtestcoral","#F08080")
test.set("mediumvioletred","#C71585")
test.set("plum","#DDA0DD")
console.log(test.values());
