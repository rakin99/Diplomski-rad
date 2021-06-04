package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.City;
import com.ftn.diplomski.model.CurrentWeather;
import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.model.Hour;
import com.ftn.diplomski.modelDTO.ForecastDTO;
import com.ftn.diplomski.service.CityInterface;
import com.ftn.diplomski.service.ForecastInterface;
import com.google.gson.Gson;
import com.mysql.fabric.xmlrpc.base.Array;

@Service
public class ForecastService implements ForecastInterface {

	@Autowired
	private CityInterface cityS;
	
	@Override
	public ForecastDTO getForecast5Hours(String searchPlace) {
		System.out.println("\nGet forecast 5 hours");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			System.out.println("Nisam ga naso u bazi!");
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "https://api.openweathermap.org/data/2.5/onecall?lat="+ city.getCoord().getLat() +"&lon="+city.getCoord().getLon()+"&exclude=alerts,daily,minutely,current&appid=6f2d2019a1c929b9d3599e7d511bfe03&units=metric&lang=sr";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		Forecast forecast = gson.fromJson(result, Forecast.class);
		forecast.setHourly(forecast.getHourly().subList(1, 6));
		ForecastDTO dto = new ForecastDTO(searchPlace,forecast,forecast.getHourly().get(0).getDt());
		return dto;
	}

	@Override
	public ForecastDTO getForecast48Hours(String searchPlace, int numPage) {
		System.out.println("\nGet forecast 48 hours");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			System.out.println("Nisam ga naso u bazi!");
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "https://api.openweathermap.org/data/2.5/onecall?lat="+ city.getCoord().getLat() +"&lon="+city.getCoord().getLon()+"&exclude=alerts,daily,minutely,current&appid=6f2d2019a1c929b9d3599e7d511bfe03&units=metric&lang=sr";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		Forecast forecast = gson.fromJson(result, Forecast.class);
		List<Hour> hourly = new  ArrayList<Hour>();
		for (int i = numPage*24; i < numPage*24+24; i++) {
			if(i%3==0) {
				hourly.add(forecast.getHourly().get(i));
			}
		}
		forecast.setHourly(hourly);
		ForecastDTO dto = new ForecastDTO(searchPlace,forecast,forecast.getHourly().get(0).getDt());
		return dto;
	}

	@Override
	public ForecastDTO getForecast7Days(String searchPlace) {
		System.out.println("\nGet forecast 7 days");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			System.out.println("Nisam ga naso u bazi!");
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "https://api.openweathermap.org/data/2.5/onecall?lat="+ city.getCoord().getLat() +"&lon="+city.getCoord().getLon()+"&exclude=alerts,hourly,minutely,current&appid=6f2d2019a1c929b9d3599e7d511bfe03&units=metric&lang=sr";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    System.out.println("Res: "+result);
	    Gson gson = new Gson();
		Forecast forecast = gson.fromJson(result, Forecast.class);
		forecast.setDaily(forecast.getDaily().subList(1, forecast.getDaily().size()-1));
		ForecastDTO dto = new ForecastDTO(searchPlace,forecast,forecast.getDaily().get(0).getDt());
		return dto;
	}

}
