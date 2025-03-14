package com.example.demo.services;

import com.example.demo.entities.User;

import java.util.List;

public interface IUserService {
    List<User> getUsers();
    void addUser(User user);
    void updateUser(int id ,User user);
    public void deleteUser(int id);
}
