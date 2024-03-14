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
  employee,
};
