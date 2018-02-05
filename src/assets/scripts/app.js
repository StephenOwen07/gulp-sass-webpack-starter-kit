import Person from "./modules/Person";

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var stephen = new Person("Stephen");
var sophie = new Adult("Sophie");
stephen.greet();
sophie.payTaxes();
