package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.City;
import com.ftn.diplomski.model.Coordination;
import com.ftn.diplomski.model.CurrentWeather;
import com.ftn.diplomski.modelDTO.CurrentWeatherDTO;
import com.ftn.diplomski.service.CityInterface;
import com.ftn.diplomski.service.CoordinationInterface;
import com.ftn.diplomski.service.CurrentWeatherInterface;
import com.ftn.diplomski.service.WordConverterInterface;
import com.google.gson.Gson;

@Service
public class CurrentWeatherService implements CurrentWeatherInterface{

	@Autowired
	private CityInterface cityS;
	
	@Autowired
	private CoordinationInterface coordS;
	
	@Autowired
	private WordConverterInterface convertS;
	
	@Override
	public CurrentWeatherDTO getCurrentWeather(String searchPlace) {
		System.out.println("\nGet current weather");
		String uri = "https://api.openweathermap.org/data/2.5/weather?q=" + searchPlace +"&appid=6f2d2019a1c929b9d3599e7d511bfe03&units=metric&lang=sr";

	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
//	    System.out.println("Result: "+result);
	    Gson gson = new Gson();
		CurrentWeather currentWeather = gson.fromJson(result, CurrentWeather.class); 
		City city = cityS.findById(currentWeather.getId());
		if(city==null) {
//			System.out.println("City je null");
			city = new City();
			Coordination coord = coordS.save(currentWeather.getCoord());
			city.setCoord(coord);
			city.setId(currentWeather.getId());
			city.setNameCity(convertS.cyrilicToLatin(currentWeather.getName()));
			cityS.save(city);
		}
		currentWeather.setName(city.getNameCity());

		return new CurrentWeatherDTO(currentWeather);
	}

}
