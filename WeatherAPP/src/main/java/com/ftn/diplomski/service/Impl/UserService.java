package com.ftn.diplomski.service.Impl;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.User;
import com.ftn.diplomski.modelDTO.JwtDTO;
import com.ftn.diplomski.modelDTO.LoginDTO;
import com.ftn.diplomski.modelDTO.UserDTO;
import com.ftn.diplomski.repository.UserRepository;
import com.ftn.diplomski.security.TokenUtils;
import com.ftn.diplomski.service.UserInterface;

@Service
public class UserService implements UserInterface, UserDetailsService {

	@Autowired
	UserRepository repository;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	private TokenUtils tokenUtils;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public JwtDTO login(LoginDTO dto) {
		System.out.println("\nLogin-------<<<<");
        try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
					dto.getUsername(), dto.getPassword());
            Authentication authentication = authenticationManager.authenticate(token);
            UserDetails details = loadUserByUsername(dto.getUsername());
            JwtDTO t = new JwtDTO(tokenUtils.generateToken(details));
            return t;
        } catch (Exception ex) {
            return null;
        }
	}
	
	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		return repository.save(user);
	}

	@Override
	public User findById(Long id) {
		// TODO Auto-generated method stub
		return repository.getById(id);
	}

	@Override
	public User findByUsername(String username) {
		// TODO Auto-generated method stub
		return repository.findOneByUsername(username);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public void delete(Long id) {
		repository.deleteById(id);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findOneByUsername(username);
	    if (user == null) {
	      throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
	    } else {
	    	List<GrantedAuthority> grantedAuthorities = new ArrayList<GrantedAuthority>();
    		grantedAuthorities.add(new SimpleGrantedAuthority(user.getRole()));
	    	
	    	//Java 1.8 way   	
	    	/*List<GrantedAuthority> grantedAuthorities = user.getUserAuthorities().stream()
	                .map(authority -> new SimpleGrantedAuthority(authority.getAuthority().getName()))
	                .collect(Collectors.toList());*/
	    	
	    	return new org.springframework.security.core.userdetails.User(
	    		  user.getUsername(),
	    		  user.getPassword(),
	    		  grantedAuthorities);
	    }
	}

	@Override
	public UserDTO register(UserDTO dto) {
		User existUser = this.findByUsername(dto.getUsername());
		if (existUser != null) {
			return null;
		}
		User user = new User();
		user.setUsername(dto.getUsername());
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		user.setAlerts(dto.isAlerts());
		user.setArea(dto.getArea());
		user.setRole("USER");
		
		user = save(user);
		return new UserDTO(user);
	}

	@Override
	public void changeSearchPlace(Principal principal,String searchPlace) {
		System.out.println("Change search place!");
		if(principal!=null) {
			User user = repository.findOneByUsername(principal.getName());
			user.setLastSearchPlace(searchPlace);
			repository.save(user);
		}else {
			System.out.println("\nPrincipal je null!");
		}
	}

	@Override
	public void changeSearchArea(Principal principal, String searchArea) {
		System.out.println("Change search area!");
		if(principal!=null) {
			User user = repository.findOneByUsername(principal.getName());
			user.setLastSearchArea(searchArea);
			repository.save(user);
		}else {
			System.out.println("\nPrincipal je null!");
		}
	}

	@Override
	public UserDTO getLoggedUser(Principal principal) {
		if(principal!=null) {
			return new UserDTO(findByUsername(principal.getName()));
		}
		return new UserDTO();
	}

	@Override
	public List<User> findByArea(String area) {
		return repository.findByArea(area);
	}
}
