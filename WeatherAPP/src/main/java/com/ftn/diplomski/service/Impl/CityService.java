package com.ftn.diplomski.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.City;
import com.ftn.diplomski.repository.CityRepository;
import com.ftn.diplomski.service.CityInterface;

@Service
public class CityService implements CityInterface {

	@Autowired
	CityRepository repository;
	
	@Override
	public City save(City city) {
		return repository.save(city);
	}

	@Override
	public City findById(Long id) {
		return repository.findById(id).orElse(null);
	}

}
