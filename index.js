const { prompt } = require('inquirer');
const { runLogo } = require('./lib/logo');
require('console.table');

// database class
const client = require('./lib/client');

// question arrays
const { menuOptions } = require('./lib/questions');
const { dept } = require('./lib/dept_questions');
const { employee } = require('./lib/emp_questions');
const { role } = require('./lib/role_questions');

// action functions

// view depts
const viewDept = async () => {};
// view roles
const viewRole = async () => {};
// view employees
const viewEmp = async () => {};

// add dept
const addDept = async () => {
  const { name } = await prompt(dept);
};
// add employee
const addEmp = async () => {
  // retrieve arrays first
  const { first_name, last_name, role_id, manager_id } = await prompt(
    employee(roleArr, empArr)
  );
};
// add role
const addRole = async () => {
  // retrieve arrays first
  const { title, salary, department_id } = await prompt(role(deptArr));
};

// update emp role
const updateEmpRole = async () => {};
// update emp manager
const updateEmpManager = async () => {};

// delete depts
const deleteDept = async () => {};
// delete roles
const deleteRole = async () => {};
// delete employees
const deleteEmp = async () => {};

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
    case 'update employee role':
      updateEmpRole();
      break;
    case 'update employee manager':
      updateEmpManager();
      break;
    case 'delete department':
      deleteDept();
      break;
    case 'delete role':
      deleteRole();
      break;
    case 'delete employee':
      deleteEmp();
      break;
    case 'quit':
      client.endPool();
      break;
    // end connection as default
    default:
      client.endPool();
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
