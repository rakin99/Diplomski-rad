package com.ftn.diplomski.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.City;
import com.ftn.diplomski.repository.CityRepository;
import com.ftn.diplomski.service.CityInterface;
import com.ftn.diplomski.service.WordConverterInterface;
import com.google.gson.Gson;

@Service
public class CityService implements CityInterface {

	@Autowired
	CityRepository repository;
	
	@Autowired
	WordConverterInterface convertS;
	
	@Override
	public City save(City city) {
		return repository.save(city);
	}

	@Override
	public City findById(Long id) {
		return repository.findById(id).orElse(null);
	}

	@Override
	public City findByName(String searchPlace) {
		return repository.findByName(searchPlace);
	}

	@Override
	public City getCityFromNet(String searchPlace) {
		System.out.println("\nGet city from net");
		String uri = "https://api.openweathermap.org/data/2.5/weather?q=" + searchPlace +"&appid=6f2d2019a1c929b9d3599e7d511bfe03&lang=sr";
		RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		City city = gson.fromJson(result, City.class);
		city.setNameCity(convertS.cyrilicToLatin(city.getNameCity()));
		System.out.println("\nCuvam city!");
		city = save(city);
		return city;
	}

}
