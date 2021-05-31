package com.ftn.diplomski.controller;

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

import com.ftn.diplomski.modelDTO.CurrentWeatherDTO;
import com.ftn.diplomski.service.CurrentWeatherInterface;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})

@RestController
@RequestMapping(value = "api/weather")
public class WeatherController {

	@Autowired
	private CurrentWeatherInterface currentWS;
	
	@GetMapping(value = "/current-weather")
	public ResponseEntity<CurrentWeatherDTO> getCurrentWeather(@RequestParam String searchPlace){
		try {
			return ResponseEntity.ok().body(currentWS.getCurrentWeather(searchPlace));
		}catch (Exception e) {
			e.printStackTrace();
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
		 
	}
}
