package com.ftn.diplomski.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ftn.diplomski.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findOneByUsername(String username);
	List<User> findByArea(String area);
}
