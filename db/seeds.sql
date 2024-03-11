-- insert into department table
INSERT INTO department(name)
VALUES ('Executive'),
('Legal'),
('Accounting'),
('Engineering'),
('Human Resources');

-- insert into role table
INSERT INTO role(title, salary, department_id)
VALUES ('CEO', 120000, 1),
('lawyer', 150000, 2),
('CPA', 100000, 3),
('Senior Engineer', 160000, 4),
('Junior Engineer', 120000, 4),
('HR Consultant', 90000, 5);

-- insert into employee table
-- date in postgres is YYYY-MM-DD
INSERT INTO employee(first_name, last_name, hire_date, role_id, manager_id)
VALUES ('Rick', 'Sanchez', '1901-02-10', 1, null),
('Beth', 'Smith', '1981-10-14', 4, 1),
('Morty', 'Smith Jr', '1999-05-04', 5, 2),
('Summer', 'Smith', '1989-06-11', 2, 1),
('Tammy', 'Gueterman', '1989-09-03', 3, null),
('Bird', 'Person', '1912-12-25', 1, null);