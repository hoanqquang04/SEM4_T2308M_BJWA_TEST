package com.example.bjwaexam.services;
import com.example.bjwaexam.entities.Employee;
import com.example.bjwaexam.repositories.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;
    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    @Override
    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
    @Override
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
    @Override
    public void updateEmployee(Employee employee, Long id) {
        if (employeeRepository.existsById(id)) {
            employee.setId(id);
            employeeRepository.save(employee);
        } else {
            throw new RuntimeException("not found with id: " + id);
        }
    }
}