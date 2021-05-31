package com.ftn.diplomski.service;

import com.ftn.diplomski.model.City;

public interface CityInterface {

	public City save(City city);
	public City findById(Long id);
}
