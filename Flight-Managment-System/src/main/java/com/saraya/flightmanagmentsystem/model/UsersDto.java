package com.saraya.flightmanagmentsystem.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class UsersDto implements Serializable {
    private  Long userId;
    private  String usersType;
    private  String userName;
    private  String userPassword;
    private  Integer userPhone;
    private  String userEmail;
}
