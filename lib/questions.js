// question arrays for inquirer prompts
const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Please make your selection: ',
    choices: [
      'view departments',
      'view departments with budget',
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

module.exports = {
  menuOptions,
};
