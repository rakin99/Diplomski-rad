package com.ftn.diplomski.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ftn.diplomski.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findOneByUsername(String username);
}
