package com.ftn.diplomski.service;

import java.util.List;

import com.ftn.diplomski.model.User;
import com.ftn.diplomski.modelDTO.JwtDTO;
import com.ftn.diplomski.modelDTO.LoginDTO;
import com.ftn.diplomski.modelDTO.UserDTO;

public interface UserInterface {

	public User save(User user);
	public User findById(Long id);
	public User findByUsername(String username);
	public List<User> findAll();
	public void delete(Long id);
	public JwtDTO login(LoginDTO dto);
	public UserDTO register(UserDTO dto);
}
