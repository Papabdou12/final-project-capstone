package com.saraya.flightmanagmentsystem.repository;


import com.saraya.flightmanagmentsystem.model.ERole;
import com.saraya.flightmanagmentsystem.model.Role;
import com.saraya.flightmanagmentsystem.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

;import java.util.Optional;
import java.util.Set;

public interface RoleRepository extends JpaRepository<Role, Long> {
Optional<Role> findByRoleName(ERole roleName);


}