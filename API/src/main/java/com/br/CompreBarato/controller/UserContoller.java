/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.br.CompreBarato.controller;

import com.br.CompreBarato.dto.MonitoringDTO;
import com.br.CompreBarato.dto.UserDTO;
import com.br.CompreBarato.model.Product;
import com.br.CompreBarato.model.User;
import com.br.CompreBarato.repository.ProductRepository;
import com.br.CompreBarato.repository.UserRepository;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Cleo
 */
@RestController
@RequestMapping("/user")
@CrossOrigin

public class UserContoller {

    @Autowired
    UserRepository repository;

    @Autowired
    ProductRepository productRepository;

    @GetMapping
    @Operation(summary = "List All Users")
    public List<User> getUsers() {
        return repository.findAll();
    }

    @PostMapping
    @Operation(summary = "Create New User")
    public User createUser(@RequestBody UserDTO user) {
        User insert = repository.insert(user.toUser());
        return insert;
    }

    @PutMapping
    public User editUser(@RequestBody UserDTO user) {
        User insert = repository.insert(user.toUser());
        return insert;
    }

    @PostMapping("/monitor")
    @Operation(summary = "Add Product For Monitoring")
    public User addProductToMonitor(@RequestBody MonitoringDTO monitoring) {
        Optional<User> user = repository.findById(monitoring.getUserID());
        Optional<Product> product = productRepository.findById(monitoring.getProductID());
        user.get().getMonitored().add(product.get());
        return repository.save(user.get());
    }
}
