package com.ftn.diplomski.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.diplomski.model.CurrentWeather;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})

@RestController
@RequestMapping(value = "api/weather")
public class WeatherController {

	@GetMapping(value = "/current-weather")
	public ResponseEntity<CurrentWeather> getCurrentWeather(@RequestParam String searchPlace){
		System.out.println("\ngetCurrentWeather");
		CurrentWeather weather = new CurrentWeather();
		weather.setName(searchPlace);
		return ResponseEntity.ok().body(weather); 
	}
}
