class CounterModel {
  constructor() {
    this.counter = 0;
  }

  increment(cb) {
    this.counter += 1;
    cb(this.counter);
    console.log("!!!!! " + this.counter);
  }

  decrement(cb) {
    this.counter -= 1;
    cb(this.counter);
  }
}
