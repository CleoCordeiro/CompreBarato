/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.br.CompreBarato.model;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

/**
 *
 * @author Cleo
 */
@Document(collection = "user")
@Schema(hidden = true)
public class User {

    @Id
    private String id;

    @Indexed(unique = true)
    private String userName;
    private String password;
    private String chatID;
    @DocumentReference(lookup = "{ \'_id\' : ?#{monitored} }")
    private List<Product> monitored = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return userName;
    }

    public void setName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getChatID() {
        return chatID;
    }

    public void setChatID(String chatID) {
        this.chatID = chatID;
    }

    public List<Product> getMonitored() {
        return monitored;
    }

    public void setMonitored(List<Product> monitored) {
        this.monitored = monitored;
    }

}
