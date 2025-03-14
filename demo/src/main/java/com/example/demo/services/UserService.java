package com.example.demo.services;

import com.example.demo.entities.User;
import com.example.demo.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public List<User> getUsers() {
        var userList = userRepository.findAll();
        return userList;
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void updateUser(int id, User user) {
        try {
            var exittingUser = userRepository.findById(id).get();

            exittingUser.setName(user.getName());
            exittingUser.setAge(user.getAge());
            exittingUser.setSalary(user.getSalary());
            userRepository.save(exittingUser);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void deleteUser(int id) {
        try {
            userRepository.deleteById(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
