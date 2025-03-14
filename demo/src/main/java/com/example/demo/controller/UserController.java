package com.example.demo.controller;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    public UserController() {

    }

    @GetMapping("/list")
    public List<User> findAll() {
        var userList = userService.getUsers();
        return userList;
    }

    @PostMapping("/add")
    public void addUser(@RequestBody User newUser) {
        try {
            userService.addUser(newUser);
            System.out.println("Add User Success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PutMapping("edit/{id}")
    public void editUser(@PathVariable int id, @RequestBody User newUser) {
        try {
            userService.updateUser(id, newUser);
            System.out.println("Edit User Success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping("delete/{id}")
    public void deleteUser(@PathVariable int id) {
        try {
            userService.deleteUser(id);
            System.out.println("Delete User Success");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
