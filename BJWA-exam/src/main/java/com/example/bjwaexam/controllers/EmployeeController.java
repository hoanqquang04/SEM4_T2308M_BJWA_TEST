package com.example.bjwaexam.controllers;
import com.example.bjwaexam.entities.Employee;
import com.example.bjwaexam.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
@Controller
public class EmployeeController {
    @Autowired
    private IEmployeeService employeeService;
    @GetMapping("/")
    public String viewHomePage(Model model) {
        model.addAttribute("listEmployees", employeeService.getAllEmployees());
        model.addAttribute("employee", new Employee());
        return "index";
    }
    @PostMapping("/saveEmployee")
    public String saveEmployee(@ModelAttribute("employee") Employee employee, Model model) {
        boolean nameExists = employeeService.getAllEmployees().stream()
                .anyMatch(emp -> emp.getName().equalsIgnoreCase(employee.getName())&&!emp.getId().equals(employee.getId()));
        if (nameExists) {
            model.addAttribute("errorMessage", "employee with name " + employee.getName() + " already exists.");
            model.addAttribute("listEmployees", employeeService.getAllEmployees());
            return "index";
        }
        employeeService.saveEmployee(employee);
        return "redirect:/";
    }
    @GetMapping("/showFormForUpdate/{id}")
    public String showFormForUpdate(@PathVariable(value = "id") Long id, Model model) {
        Employee employee = employeeService.getAllEmployees().stream()
                .filter(emp -> emp.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("invalid employee Id:" + id));
        model.addAttribute("employee", employee);
        model.addAttribute("listEmployees", employeeService.getAllEmployees());
        return "index";
    }
    @GetMapping("/deleteEmployee/{id}")
    public String deleteEmployee(@PathVariable(value = "id") Long id) {
        employeeService.deleteEmployee(id);
        return "redirect:/";
    }
}