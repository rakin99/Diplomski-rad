package com.ftn.diplomski.service;

import com.ftn.diplomski.modelDTO.CurrentWeatherDTO;

public interface CurrentWeatherInterface {

	public CurrentWeatherDTO getCurrentWeather(String searchPlace);
}
