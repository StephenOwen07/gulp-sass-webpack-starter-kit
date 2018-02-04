function Person(name) {
  this.name = name;
  this.greet = function() {
    return "Hello my name is " + this.name;
  };
}

module.exports = Person;
