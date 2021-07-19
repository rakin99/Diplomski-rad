package com.ftn.diplomski.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ftn.diplomski.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findOneByUsername(String username);
	List<User> findByArea(String area);
	
	@Query(value = "SELECT * FROM weather.users\r\n" + 
			"where username like concat('%',:email,'%')",nativeQuery = true)
	Page<User> findByEmail(@Param("email") String email, Pageable page);
	
	@Query(value = "SELECT count(*) FROM weather.users\r\n" + 
			"where username like concat('%',:email,'%')",nativeQuery = true)
	Long countByEmail(@Param("email") String email);
}
