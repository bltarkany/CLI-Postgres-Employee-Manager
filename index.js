const { prompt } = require('inquirer');
const { runLogo } = require('./lib/logo');
require('console.table');

// database class
const client = require('./lib/client');

// question arrays
const { menuOptions } = require('./lib/questions');
const { dept } = require('./lib/dept_questions');
const { employee, empsByManager } = require('./lib/emp_questions');
const { role } = require('./lib/role_questions');

// action functions

// view depts
const viewDept = async () => {
  const { rows } = await client.viewDepts();
  console.log('\n', 'Departments: ');
  console.log('<----------------------------------->', '\n');
  console.table(rows);
  main();
};
// view depts w/ budget
const viewDeptWBudget = async () => {
  const { rows } = await client.viewDeptsWithBudget();
  console.log('\n', 'Departments With Current Budget: ');
  console.log('<----------------------------------->', '\n');
  console.table(rows, '\n');
  main();
};
// view roles
const viewRole = async () => {
  const { rows } = await client.viewRoles();
  console.log('\n', 'Roles: ');
  console.log('<----------------------------------->', '\n');
  console.table(rows, '\n');
  main();
};
// view employees
const viewEmp = async () => {
  const { rows } = await client.viewEmps();
  console.log('\n', 'Employees: ');
  console.log('<----------------------------------->', '\n');
  console.table(rows, '\n');
  main();
};
// view employees
const viewEmpManager = async () => {
  // retrieve arrays first
  const roles = await client.role_arr();
  const roleArr = roles.rows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  const answers = await prompt(empsByManager(roleArr));
  const { rows } = await client.viewEmpsByManager(answers);
  console.log('\n', 'Employees By Selected Manager: ');
  console.log('<----------------------------------->', '\n');
  console.table(rows, '\n');
  main();
};

// add dept
const addDept = async () => {
  const answers = await prompt(dept);
  const { rowCount } = await client.add_dept(answers);
  console.log('\n', `${rowCount} department inserted.`);
  console.log('<----------------------------------->', '\n');
  main();
};
// add employee
const addEmp = async () => {
  // retrieve arrays first
  const roles = await client.role_arr();
  const roleArr = roles.rows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  const emps = await client.emp_arr();
  const empArr = emps.rows.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
  const answers = await prompt(employee(roleArr, empArr));
  const { rowCount } = await client.add_emp(answers);
  console.log('\n', `${rowCount} employee inserted.`);
  console.log('<----------------------------------->', '\n');
  main();
};
// add role
const addRole = async () => {
  // retrieve arrays first
  const depts = await client.dept_arr();
  const deptArr = depts.rows.map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));
  const answers = await prompt(role(deptArr));
  const { rowCount } = await client.add_role(answers);
  console.log('\n', `${rowCount} role inserted.`);
  console.log('<----------------------------------->', '\n');
  main();
};

// update emp role
const updateEmpRole = async () => {
  // retrieve arrays first
  const roles = await client.role_arr();
  const roleArr = roles.rows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  const emps = await client.emp_arr();
  const empArr = emps.rows.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
};
// update emp manager
const updateEmpManager = async () => {
  // retrieve arrays first
  const emps = await client.emp_arr();
  const empArr = emps.rows.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
};

// delete depts
const deleteDept = async () => {
  // retrieve arrays first
  const depts = await client.dept_arr();
  const deptArr = depts.rows.map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));
};
// delete roles
const deleteRole = async () => {
  // retrieve arrays first
  const roles = await client.role_arr();
  const roleArr = roles.rows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
};
// delete employees
const deleteEmp = async () => {
  // retrieve arrays first
  const emps = await client.emp_arr();
  const empArr = emps.rows.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
};

// main menu
const main = async () => {
  const { option } = await prompt(menuOptions);
  console.log(option);
  switch (option) {
    case 'view departments':
      viewDept();
      break;
    case 'view departments with budget':
      viewDeptWBudget();
      break;
    case 'view roles':
      viewRole();
      break;
    case 'view employees':
      viewEmp();
      break;
    case 'view employees by manager':
      viewEmpManager();
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
