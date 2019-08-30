class CounterView {
  constructor() {
    this.counterWrap = document.querySelector("#counterModule");

    this.btn = this.counterWrap.querySelector(".counter__increment");
    this.btn = this.counterWrap.querySelector('.counter__decrement');
    this.counter = this.counterWrap.querySelector(".counter__value");
  }

  listenIncrement(cb) {
    this.btn.addEventListener("click", () => {
      cb(this.render.bind(this)); // call model.increment
    });
  }

  listenDecrement(cb){
    this.btn.addEventListener("click", () =>{
      cb(this.render.bind(this));
    });
  }

  render(neCounter) {
    this.counter.innerHTML = neCounter;
  }
}
