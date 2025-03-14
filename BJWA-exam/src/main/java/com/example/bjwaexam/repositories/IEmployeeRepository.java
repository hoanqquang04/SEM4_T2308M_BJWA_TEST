package com.example.bjwaexam.repositories;

import com.example.bjwaexam.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
}