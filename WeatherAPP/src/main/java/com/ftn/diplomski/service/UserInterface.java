package com.ftn.diplomski.service;

import java.security.Principal;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ftn.diplomski.model.User;
import com.ftn.diplomski.modelDTO.JwtDTO;
import com.ftn.diplomski.modelDTO.LoginDTO;
import com.ftn.diplomski.modelDTO.UserDTO;

public interface UserInterface {

	public User save(User user);
	public UserDTO edit(UserDTO user,Principal principal);
	public UserDTO findById(Long id);
	public User findByUsername(String username);
	public List<User> findAll();
	public Page<User> findAll(Pageable page);
	public List<UserDTO> findAllDTOS(Pageable page);
	public List<User> findByArea(String area);
	public void delete(Long id);
	public JwtDTO login(LoginDTO dto);
	public UserDTO register(UserDTO dto);
	public void changeSearchPlace(Principal principal,String searchPlace);
	public void changeSearchArea(Principal principal,String searchArea);
	public UserDTO getLoggedUser(Principal principal);
	public Long getNumberPage();
}
