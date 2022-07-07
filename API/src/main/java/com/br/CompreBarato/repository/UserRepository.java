/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.br.CompreBarato.repository;

import com.br.CompreBarato.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author Cleo
 */
public interface UserRepository extends MongoRepository<User, String>{
    
}
