package com.ftn.diplomski.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.City;
import com.ftn.diplomski.model.CurrentWeather;
import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.service.CityInterface;
import com.ftn.diplomski.service.ForecastInterface;
import com.google.gson.Gson;

@Service
public class ForecastService implements ForecastInterface {

	@Autowired
	private CityInterface cityS;
	
	@Override
	public Forecast getForecast5Hours(String searchPlace) {
		System.out.println("\nGet forecast 5 hours");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			System.out.println("Nisam ga naso u bazi!");
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "https://api.openweathermap.org/data/2.5/onecall?lat="+ city.getCoord().getLat() +"&lon="+city.getCoord().getLon()+"&exclude=alerts,daily,minutely,current&appid=6f2d2019a1c929b9d3599e7d511bfe03&units=metric&lang=sr";
		System.out.println(uri);
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		Forecast forecast = gson.fromJson(result, Forecast.class);
		forecast.setHourly(forecast.getHourly().subList(1, 6));
		return forecast;
	}

}
