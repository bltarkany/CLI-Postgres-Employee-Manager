// add employee
const employee = (role, emp) => [
  {
    type: 'input',
    name: 'first_name',
    message: 'Provide the first name: ',
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Provide the last name: ',
  },
  {
    type: 'input',
    name: 'hire_date',
    message: 'Provide the hire date: (YYYY-MM-DD)',
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

const empsByManager = (manager) => [
  {
    type: 'list',
    name: 'manager_id',
    message: `Select the manager: `,
    choices: manager,
  },
];

const empRole = (emp, role) => [
  {
    type: 'list',
    name: 'id',
    message: `Select the employee: `,
    choices: emp,
  },
  {
    type: 'list',
    name: 'role_id',
    message: `Select the new role: `,
    choices: role,
  },
];

const empManager = (emp, manager) => [
  {
    type: 'list',
    name: 'id',
    message: `Select the employee: `,
    choices: emp,
  },
  {
    type: 'list',
    name: 'manager_id',
    message: `Select the manager: `,
    choices: manager,
  },
];

module.exports = {
  employee,
  empsByManager,
  empRole,
  empManager,
};
