package com.saraya.flightmanagmentsystem.controller;


import com.saraya.flightmanagmentsystem.model.Role;
import com.saraya.flightmanagmentsystem.model.Users;
import com.saraya.flightmanagmentsystem.repository.RoleRepository;
import com.saraya.flightmanagmentsystem.service.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/viewAllUsers")
    public ResponseEntity<List<Users>> getAllUsers(){
        return  ResponseEntity.ok().body(service.getAllUsers());
    }


    @PostMapping("/add/users")
    public ResponseEntity<Users> saveUsers(@RequestBody Users users){
        URI uri  = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/users/add/users").toUriString());
        return  ResponseEntity.created(uri).body(service.saveUser(users));
    }
    @PostMapping("/add/role")
    public ResponseEntity<Role> saveUsers(@RequestBody Role role){
        URI uri  = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/users/add/role").toUriString());
        return  ResponseEntity.created(uri).body(service.saveRole(role));
    }


    @PostMapping("/add/role/toUser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form){
        service.addRoleToUser(form.getUsername(), form.getRoleName());
        return  ResponseEntity.ok().build();
    }

    @GetMapping("/view/{username}")
    public Optional<Users> getUser(@PathVariable String username) {
        return service.getUser(username);
    }

}



@Data
class RoleToUserForm{
    private String username;
    private String roleName;
}