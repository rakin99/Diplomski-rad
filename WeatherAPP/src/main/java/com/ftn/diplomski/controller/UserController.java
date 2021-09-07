package com.ftn.diplomski.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ftn.diplomski.model.User;
import com.ftn.diplomski.modelDTO.JwtDTO;
import com.ftn.diplomski.modelDTO.LoginDTO;
import com.ftn.diplomski.modelDTO.UserDTO;
import com.ftn.diplomski.service.MailInterface;
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
	
	@Autowired
	private MailInterface mailService;
	
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
		mailService.registrationConfirm(user.getUsername(), dto.getPassword());
		return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
	}
	
	@PutMapping("/edit")
	@PreAuthorize("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')")
	public ResponseEntity<UserDTO> editUser(@RequestBody UserDTO dto, UriComponentsBuilder ucBuilder,Principal principal){
		System.out.println("\nEdit User");
		UserDTO user = userService.edit(dto,principal.getName());
		return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
	}
	
	@PutMapping("/admin-edit")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<UserDTO> adminEditUser(@RequestBody UserDTO dto, UriComponentsBuilder ucBuilder){
		System.out.println("\nEdit User");
		UserDTO user = userService.edit(dto,dto.getUsername());
		return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
	}
	
	@GetMapping("/get-logged-user")
	public ResponseEntity<UserDTO> getLoggedUser(Principal principal){
		System.out.println("\ngetLoggedUser!");
		return new ResponseEntity<UserDTO>(userService.getLoggedUser(principal), HttpStatus.OK); 
	}
	
	@GetMapping
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<List<UserDTO>> getAllUsers(Pageable page){
		System.out.println("\nGet all users!");
		return new ResponseEntity<List<UserDTO>>(userService.findAllDTOS(page), HttpStatus.OK); 
	}
	
	@GetMapping("/get-user-by-email")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<List<UserDTO>> getUserByEmail(Pageable page,@RequestParam String email){
		System.out.println("\nGet user by email!");
		return new ResponseEntity<List<UserDTO>>(userService.findByEmail(page, email), HttpStatus.OK); 
	}
	
	@GetMapping("/get-number-pages")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<Long> getNumberPage(@RequestParam String email){
		System.out.println("\nCount!");
		return new ResponseEntity<Long>(userService.getNumberPage(email), HttpStatus.OK); 
	}
	
	@GetMapping("/{id}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<UserDTO> getOne(@PathVariable("id") Long id){
		System.out.println("\nGet one user!");
		return new ResponseEntity<UserDTO>(userService.findById(id), HttpStatus.OK); 
	}
	
	@DeleteMapping("/{id}")
	@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
	public ResponseEntity<UserDTO> delete(@PathVariable("id") Long id){
		System.out.println("\nDelete user!");
		userService.delete(id);
		return ResponseEntity.status(200).build();
	}
}
