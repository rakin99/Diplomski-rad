package com.ftn.diplomski.service;

import com.ftn.diplomski.model.Forecast;

public interface ForecastInterface {

	public Forecast getForecast5Hours(String searchPlace);
}
