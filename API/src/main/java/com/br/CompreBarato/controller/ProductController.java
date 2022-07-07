/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.br.CompreBarato.controller;

import com.br.CompreBarato.model.Product;
import com.br.CompreBarato.repository.ProductRepository;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springdoc.api.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Cleo
 */
@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductRepository repository;

    @GetMapping

    public Page<Product> getProducts(@RequestParam(required = false)
            @Schema(name = "Search Product", description = "Name of item to search", example = "Placa de Video")
            String searchProduct,
            @ParameterObject @PageableDefault(sort = "price", direction = Direction.DESC, page = 0, size = 10) Pageable page) {

        if (searchProduct == null) {
            return repository.findAll(page);
        } else {
            return repository.findAllByName(searchProduct, page);
        }
    }

}
