var employees = [];

function Employee (name, jobTitle, salary) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  this.status = "Full-time";
  this.printEmployeeForm = function () {
      console.log("Name:" + " " + name);
      console.log("Job Title:" + " " + jobTitle);
      console.log("Salary:" + " " + salary);
      console.log("Status:" + " " + status);
  }
};

var ironMan = new Employee ('Tony Stark', 'Ironman', 'The Sky');
var thor = new Employee ('Thor', 'God of Thunder', "come on... I am a god");
var spiderMan = new Employee ('Peter Parker', 'Spider Man', 'College Student Income');
var hulk = new Employee ('David Banner', 'Hulk Smash', 'Owe money for damages');

// ironMan.printEmployeeForm();
// thor.printEmployeeForm();
// spiderMan.printEmployeeForm();
// hulk.printEmployeeForm();

thor.status ='Part-time';

employees.push(ironMan, thor, spiderMan, hulk);
console.log(employees);
