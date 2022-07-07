/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.br.CompreBarato.dto;

/**
 *
 * @author Cleo
 */
public class MonitoringDTO {
    private String userID;
    private Long productID;

    /**
     * @return the userID
     */
    public String getUserID() {
        return userID;
    }

    /**
     * @param userID the userID to set
     */
    public void setUserID(String userID) {
        this.userID = userID;
    }

    /**
     * @return the productID
     */
    public Long getProductID() {
        return productID;
    }

    /**
     * @param productID the productID to set
     */
    public void setProductID(Long productID) {
        this.productID = productID;
    }
    
}
