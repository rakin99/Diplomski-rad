package com.ftn.diplomski.service;

import com.ftn.diplomski.model.City;

public interface CityInterface {

	public City save(City city);
	public City findById(Long id);
	public City findByName(String searchPlace);
	public City getCityFromNet(String searchPlace);
}
