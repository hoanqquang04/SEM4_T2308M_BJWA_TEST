package com.t2308m.sem4.demo33.services;

import com.t2308m.sem4.demo33.entities.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeService {

    List<Employee> getAllEmployees();

    Employee getEmployeeById(Long id);

    Employee createEmployee(Employee employee);

    Employee updateEmployee(Long id, Employee employeeDetails);

    void deleteEmployee(Long id);

    List<Employee> searchEmployeesByName(String name);
}
