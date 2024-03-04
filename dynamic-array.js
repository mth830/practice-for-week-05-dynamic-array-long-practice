class DynamicArray {

  constructor(defaultSize = 4) {
    
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  push(val) {

    if (this.length === this.capacity) {
      this.resize();
    }

    this.data[this.length] = val;
    this.length++;
  }

  _moveRight() {
    for (let i = this.length - 1; i >= 1; i--) {
      this.data[i] = this.data[i - 1];
    }
  }
  _moveLeft() {
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
  }

  pop() {
    if (this.length === 0) return undefined;
    
    let result = this.data[this.length - 1];
    this.length--;
    
    return result;
  }

  shift() {
    if (this.length === 0) return undefined;
    
    let result = this.data[0];
    this._moveLeft();
    this.length--;
    
    return result;
  }

  unshift(val) {
    if (this.length === this.capacity) {
      this.resize();
    }

    this.length++;
    this._moveRight();
    this.data[0] = val;

  }

  indexOf(val) {

    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) {
        return i;
      }
    }

    return -1;
  }

  resize() {
    let originalCapacity = this.capacity;
    let newCapacity = this.capacity * 2;
    let newArr = new Array(newCapacity);
    for (let i = 0; i < originalCapacity; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;
    this.capacity = newCapacity;
  }

}

module.exports = DynamicArray;