package com.saraya.flightmanagmentsystem.service;

import com.saraya.flightmanagmentsystem.model.Role;
import com.saraya.flightmanagmentsystem.model.Users;
import com.saraya.flightmanagmentsystem.repository.RoleRepository;
import com.saraya.flightmanagmentsystem.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService{

    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final RoleRepository roleRepository;

    public UserServiceImpl(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Users saveUser(Users users ) {

        return userRepository.save(users);
    }

    @Override
    public Role saveRole(Role role) {

        return  roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String roleName, String username) {

        Optional<Users> users = userRepository.findByUsername(username);
        Optional<Role> role = roleRepository.findByRoleName(roleName);
        users.get().getRoles().add(role.get());
    }

    @Override
    public Optional<Users> getUser(String username) {
        return userRepository.findByUsername(username);
    }




    @Override
    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }
}
