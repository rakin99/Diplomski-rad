package com.ftn.diplomski.service;

import com.ftn.diplomski.modelDTO.AirPollutionDTO;

public interface AirPollutionInterface {

	public AirPollutionDTO getCurrentAirPollution(String searchPlace);
	public AirPollutionDTO getForecastAirPollution(String searchPlace);
}
