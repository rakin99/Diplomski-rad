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
import com.ftn.diplomski.modelDTO.ForecastDTO;
import com.ftn.diplomski.service.CurrentWeatherInterface;
import com.ftn.diplomski.service.ForecastInterface;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})

@RestController
@RequestMapping(value = "api/weather")
public class WeatherController {

	@Autowired
	private CurrentWeatherInterface currentWS;
	
	@Autowired
	private ForecastInterface forecastS;
	
	@GetMapping(value = "/current-weather")
	public ResponseEntity<CurrentWeatherDTO> getCurrentWeather(@RequestParam String searchPlace){
		try {
			return ResponseEntity.ok().body(currentWS.getCurrentWeather(searchPlace));
		}catch (Exception e) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value = "/forecast-5-hours")
	public ResponseEntity<ForecastDTO> getForecast5Hours(@RequestParam String searchPlace){
		try {
			return ResponseEntity.ok().body(forecastS.getForecast5Hours(searchPlace));
		}catch (Exception e) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value = "/forecast-48-hours")
	public ResponseEntity<ForecastDTO> getForecast48Hours(@RequestParam String searchPlace,@RequestParam int numPage){
		try {
			return ResponseEntity.ok().body(forecastS.getForecast48Hours(searchPlace,numPage));
		}catch (Exception e) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
	
	@GetMapping(value = "/forecast-7-days")
	public ResponseEntity<ForecastDTO> getForecast7Days(@RequestParam String searchPlace){
		try {
			return ResponseEntity.ok().body(forecastS.getForecast7Days(searchPlace));
		}catch (Exception e) {
			throw new ResponseStatusException(
			          HttpStatus.NOT_FOUND, e.getMessage(), e);
		}
	}
}
