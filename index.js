const { prompt } = require('inquirer');
const { runLogo } = require('./lib/logo');
require('console.table');

// database class
const client = require('./lib/client');

// question arrays
const { menuOptions } = require('./lib/questions');
const { dept, deptdelete } = require('./lib/dept_questions');
const {
  employee,
  empsByManager,
  empManager,
  empRole,
  empdelete,
} = require('./lib/emp_questions');
const { role, roledelete } = require('./lib/role_questions');

// action functions
const getDepts = async () => {
  const depts = await client.dept_arr();
  const deptArr = depts.rows.map((dept) => ({
    name: dept.name,
    value: dept.id,
  }));
  return deptArr;
};

const getRoles = async () => {
  const roles = await client.role_arr();
  const roleArr = roles.rows.map((role) => ({
    name: role.title,
    value: role.id,
  }));
  return roleArr;
};

const getEmployees = async () => {
  const emps = await client.emp_arr();
  const empArr = emps.rows.map((emp) => ({
    name: `${emp.first_name} ${emp.last_name}`,
    value: emp.id,
  }));
  return empArr;
};

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
  const empArr = await getEmployees();
  const answers = await prompt(empsByManager(empArr));
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
  const roleArr = await getRoles();
  const empArr = await getEmployees();
  const answers = await prompt(employee(roleArr, empArr));
  const { rowCount } = await client.add_emp(answers);
  console.log('\n', `${rowCount} employee inserted.`);
  console.log('<----------------------------------->', '\n');
  main();
};
// add role
const addRole = async () => {
  const deptArr = await getDepts();
  const answers = await prompt(role(deptArr));
  const { rowCount } = await client.add_role(answers);
  console.log('\n', `${rowCount} role inserted.`);
  console.log('<----------------------------------->', '\n');
  main();
};

// update emp role
const updateEmpRole = async () => {
  const roleArr = await getRoles();
  const empArr = await getEmployees();
  //   TEST: add prompt and class method
  const answers = await prompt(empRole(empArr, roleArr));
  const { rowCount } = await client.update_emp_role(answers);
  console.log('\n', `${rowCount} employee updated.`);
  console.log('<----------------------------------->', '\n');
  main();
};
// update emp manager
const updateEmpManager = async () => {
  // TEST arr retrieval
  const empArr = await getEmployees();
  //   FIXME: add prompt and class method
};

// delete depts
const deleteDept = async () => {
  // TEST: test dept arr
  const deptArr = getDepts();
  //   TODO: add prompt and class method
};
// delete roles
const deleteRole = async () => {
  // TEST arr retrieval
  const roleArr = await getRoles();
  //   TODO: add prompt and class method
};
// delete employees
const deleteEmp = async () => {
  // TEST arr retrieval
  const empArr = await getEmployees();
  //   TODO: add prompt and class method
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
