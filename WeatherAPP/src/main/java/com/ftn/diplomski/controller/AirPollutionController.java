package com.ftn.diplomski.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.ftn.diplomski.modelDTO.AirPollutionDTO;
import com.ftn.diplomski.service.AirPollutionInterface;
import com.ftn.diplomski.service.UserInterface;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})
@RestController
@RequestMapping(value = "api/air-pollution")
public class AirPollutionController {
	
	@Autowired
	private AirPollutionInterface apS;
	
	@Autowired
	private UserInterface userService;
	
	@GetMapping(value = "/current-pollution")
	public ResponseEntity<AirPollutionDTO> getCurrentAirPollution(@RequestParam String searchPlace,Principal principal){
		userService.changeSearchPlace(principal, searchPlace);
		try {
			return ResponseEntity.ok().body(apS.getCurrentAirPollution(searchPlace));
		}catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value = "/forecast-pollution")
	public ResponseEntity<AirPollutionDTO> getForecastAirPollution(@RequestParam String searchPlace,Principal principal){
		userService.changeSearchPlace(principal, searchPlace);
		try {
			return ResponseEntity.ok().body(apS.getForecastAirPollution(searchPlace));
		}catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
}
