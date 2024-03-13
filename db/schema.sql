-- drop database
DROP DATABASE IF EXISTS employee_manager_db;
-- create database
CREATE DATABASE employee_manager_db;

-- use database
\c employee_manager_db;

-- create department table
CREATE TABLE department(
    id SERIAL PRIMARY KEY
);

-- create role table
CREATE TABLE role(
    id SERIAL PRIMARY KEY
);

-- create employee table
CREATE TABLE employee(
    id SERIAL PRIMARY KEY
);
