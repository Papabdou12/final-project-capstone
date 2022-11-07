package com.saraya.flightmanagmentsystem.playload.response;

import lombok.*;

import javax.persistence.Entity;
import java.util.List;


@Setter
@Getter
@ToString
public class JwtResponse {
  private String token;
  private String type = "Bearer ";
  private Long userId;
  private String username;
  private String userEmail;
  private List<String> roles;

  public JwtResponse(String accessToken, Long userId, String username, String email, List<String> roles) {
    this.token = accessToken;
    this.userId = userId;
    this.username = username;
    this.userEmail = email;
    this.roles = roles;
  }

}
