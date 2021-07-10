package com.ftn.diplomski.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ftn.diplomski.modelDTO.JwtDTO;
import com.ftn.diplomski.modelDTO.LoginDTO;
import com.ftn.diplomski.modelDTO.UserDTO;
import com.ftn.diplomski.service.UserInterface;
import com.ftn.diplomski.service.Impl.UserService;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})
@RestController
@RequestMapping(value = "api/user")
public class UserController {

	@Autowired
	private UserInterface userService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<JwtDTO> login(@RequestBody LoginDTO dto) {
		JwtDTO jwt = userService.login(dto);
		if(jwt!=null) {
			System.out.println("\nProsao sam if");
			return new ResponseEntity<JwtDTO>(userService.login(dto), HttpStatus.OK);
        }
        return ResponseEntity.status(401).build();
	}
	
	@PostMapping("/register")
	public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO dto, UriComponentsBuilder ucBuilder){
		System.out.println("\nAdd User");
		UserDTO user = userService.register(dto);
		if(user==null) {
			return ResponseEntity.status(409).build();
		}
		return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
	}
	
	@PostMapping("/edit")
	public ResponseEntity<UserDTO> editUser(@RequestBody UserDTO dto, UriComponentsBuilder ucBuilder){
		System.out.println("\nEdit User");
		UserDTO user = userService.edit(dto);
		return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
	}
	
	@GetMapping("/get-logged-user")
	public ResponseEntity<UserDTO> getLoggedUser(Principal principal){
		System.out.println("\ngetLoggedUser!<-------------------");
		return new ResponseEntity<UserDTO>(userService.getLoggedUser(principal), HttpStatus.OK); 
	}
}
