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
-- INSERT INTO employee(first_name, last_name, hire_date, role_id, manager_id)
-- VALUES ('Executive'),