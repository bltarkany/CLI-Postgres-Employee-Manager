const { prompt } = require('inquirer');
const { runLogo } = require('./lib/logo');
require('console.table');

// database class
const Client = require('./lib/client');

// question arrays
const { menuOptions, dept, role, employee } = require('./lib/questions');

const testarr = [
  {
    name: 'one',
    value: 1,
  },
  {
    name: 'two',
    value: 2,
  },
  {
    name: 'three',
    value: 3,
  },
];

// action functions

// view depts
const viewDept = async () => {};
// view roles
const viewRole = async () => {};
// view employees
const viewEmp = async () => {};

// add dept
const addDept = async () => {
  const { title, salary, department_id } = await prompt(role(testarr));
  console.log({ title, salary, department_id });
};
// add employee
const addEmp = async () => {
  const { title, salary, department_id } = await prompt(role(testarr));
  console.log({ title, salary, department_id });
};
// add role
const addRole = async () => {
  const { title, salary, department_id } = await prompt(role(testarr));
  console.log({ title, salary, department_id });
};

// main menu
const main = async () => {
  const { option } = await prompt(menuOptions);
  console.log(option);
  switch (option) {
    case 'view departments':
      viewDept();
      break;
    case 'view roles':
      viewRole();
      break;
    case 'view employees':
      viewEmp();
      break;
    case 'add department':
      addDept();
      break;
    case 'add employee':
      addEmp();
      break;
    case 'add role':
      addRole();
      break;

    default:
      break;
  }
};

// initialize app:
const init = () => {
  // run logo
  console.log(runLogo());
  //   run menu
  main();
};

// run app
init();
