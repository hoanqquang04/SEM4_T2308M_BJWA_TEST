package com.example.bjwaexam.services;

import com.example.bjwaexam.entities.Employee;

import java.util.List;

public interface IEmployeeService {
    List<Employee> getAllEmployees();
    void saveEmployee(Employee employee);
    void deleteEmployee(Long id);
    void updateEmployee(Employee employee, Long id);
}