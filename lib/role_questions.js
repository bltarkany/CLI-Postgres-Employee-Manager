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
    type: 'confirm',
    name: 'full_time',
    message: 'Is this position full time: ',
  },
  {
    type: 'list',
    name: 'department_id',
    message: `Provide the role's assigned department: `,
    choices: arr,
  },
];

const roledelete = (role) => [
  {
    type: 'list',
    name: 'id',
    message: `Select the role: `,
    choices: role,
  },
];

module.exports = {
  role,
  roledelete,
};
