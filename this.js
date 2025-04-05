var firstName = "Ravi";
var lastName = "Bhoite";

var Person = {
  firstName: "Shreeraj",
  lastName: "Bhoite",
  fullName: () => {
    return this.firstName + "-" + this.lastName;
  },
};

console.log(Person.fullName());

// output with arrow function : undefined-undefined

var Person1 = {
    firstName: "Shreeraj",
    lastName: "Bhoite",
    fullName: function() {
      return this.firstName + "-" + this.lastName;
    },
  };
  
  console.log(Person1.fullName());

  // output with function :Shreeraj-Bhoite