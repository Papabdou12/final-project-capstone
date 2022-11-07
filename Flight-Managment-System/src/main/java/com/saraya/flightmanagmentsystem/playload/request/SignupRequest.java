package com.saraya.flightmanagmentsystem.playload.request;

import lombok.*;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SignupRequest {

  private String username;

  private String userEmail;

  private Set<String> role;

  private String password;


}
