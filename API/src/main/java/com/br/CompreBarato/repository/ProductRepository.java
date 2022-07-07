/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.br.CompreBarato.repository;

import com.br.CompreBarato.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 *
 * @author Cleo
 */



public interface ProductRepository extends MongoRepository<Product, Long> {

    @Query("{ 'name' : { '$regex' : ?0 , $options: 'i'}}")
    public Page<Product> findAllByName(String name, Pageable paginacao);
}
