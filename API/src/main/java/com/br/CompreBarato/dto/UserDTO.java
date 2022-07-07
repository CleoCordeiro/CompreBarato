/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.br.CompreBarato.dto;

import com.br.CompreBarato.model.User;
import io.swagger.v3.oas.annotations.media.Schema;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

/**
 *
 * @author Cleo
 */
@Schema(hidden = true)
public class UserDTO {

    @NotEmpty(message = "The userName cannot be empty or null")
    @Min(5)
    @Max(40)
    private String userName;

    @NotEmpty(message = "The userName cannot be empty or null")
    @Min(8)
    private String password;

    private String chatID;

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

    public User toUser() {
        User user = new User();
        user.setName(this.userName);
        user.setPassword(this.password);
        return user;
    }
}
