"use strict";

class StringBuilder {
  #initialValue;

  constructor(initialValue) {
    this.#initialValue = initialValue;
  }

  getValue() {
    return this.#initialValue;
  }

  padStart(value) {
    return (this.#initialValue = this.#initialValue.padStart(
      this.#initialValue.length + value.length,
      value
    ));
  }

  padEnd(value) {
    return (this.#initialValue = this.#initialValue.padEnd(
      this.#initialValue.length + value.length,
      value
    ));
  }

  padBoth(value) {
    return (this.#initialValue = value + this.#initialValue + value);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
