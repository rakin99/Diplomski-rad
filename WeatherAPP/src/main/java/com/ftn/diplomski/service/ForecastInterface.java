package com.ftn.diplomski.service;

import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.modelDTO.ForecastDTO;

public interface ForecastInterface {

	public ForecastDTO getForecast5Hours(String searchPlace);
	public ForecastDTO getForecast48Hours(String searchPlace,int numPage);
}
