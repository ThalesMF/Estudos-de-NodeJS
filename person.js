class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Olá meu nome é: ${this.name}`;
  }
}

module.exports = { Person };
