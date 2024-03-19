// add dept
const dept = [
  {
    type: 'input',
    name: 'name',
    message: 'Provide department name: ',
  },
];

const deptdelete = (dept) => [
  {
    type: 'list',
    name: 'id',
    message: `Select the dept: `,
    choices: dept,
  },
];

module.exports = {
  dept,
  deptdelete,
};
