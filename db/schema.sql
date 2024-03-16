-- drop database
DROP DATABASE IF EXISTS employee_manager_db;
-- create database
CREATE DATABASE employee_manager_db;

-- use database
\c employee_manager_db;

-- create department table
CREATE TABLE department(
    id SMALLSERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL
);

-- create role table
CREATE TABLE role(
    id SMALLSERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    salary NUMERIC(10,2) NOT NULL,
    full_time BOOLEAN NOT NULL DEFAULT true,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- create employee table
CREATE TABLE employee(
    id SMALLSERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL, 
    hire_date DATE NOT NULL DEFAULT CURRENT_DATE,
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    manager_id INTEGER,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
