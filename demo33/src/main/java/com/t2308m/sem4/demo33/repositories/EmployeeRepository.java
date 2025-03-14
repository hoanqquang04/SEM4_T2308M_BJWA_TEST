package com.t2308m.sem4.demo33.repositories;



import com.t2308m.sem4.demo33.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByNameContainingIgnoreCase(String name);

    List<Employee> findByAgeGreaterThanEqual(int age);
}
