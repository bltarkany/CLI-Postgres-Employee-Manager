// question arrays for inquirer prompts
const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Please make your selection: ',
    choices: [
      'view departments',
      'view roles',
      'view employees',
      'add department',
      'add role',
      'add employee',
      'update employee role',
      'update employee manager',
      'delete department',
      'delete role',
      'delete employee',
      'quit',
    ],
  },
];

// add dept
const dept = [
  {
    type: 'input',
    name: 'option',
    message: 'Provide department name: ',
  },
];

// add role
const role = (arr) => [
  {
    type: 'input',
    name: 'title',
    message: 'Provide the role title: ',
  },
  {
    type: 'number',
    name: 'salary',
    message: 'Provide the role salary: ',
  },
  {
    type: 'list',
    name: 'department_id',
    message: `Provide the role's assigned department: `,
    choices: arr,
  },
];

// add employee
const employee = (role, emp) => [
  {
    type: 'input',
    name: 'first_name',
    message: 'Provide the role title: ',
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Provide the role title: ',
  },
  {
    type: 'list',
    name: 'role_id',
    message: `Provide the employee's role: `,
    choices: role,
  },
  {
    type: 'list',
    name: 'manager_id',
    message: `Provide the employee's manager: `,
    choices: emp,
  },
];

module.exports = {
  menuOptions,
  dept,
  role,
  employee,
};
