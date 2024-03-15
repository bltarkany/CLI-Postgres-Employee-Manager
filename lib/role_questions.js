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

module.exports = {
  role,
};
