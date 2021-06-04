package com.ftn.diplomski.service.Impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.AirInformation;
import com.ftn.diplomski.model.AirPollution;
import com.ftn.diplomski.model.City;
import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.modelDTO.AirPollutionDTO;
import com.ftn.diplomski.modelDTO.ForecastDTO;
import com.ftn.diplomski.service.AirPollutionInterface;
import com.ftn.diplomski.service.CityInterface;
import com.google.gson.Gson;

@Service
public class AirPollutionService implements AirPollutionInterface{

	@Autowired
	private CityInterface cityS;
	
	@Override
	public AirPollutionDTO getCurrentAirPollution(String searchPlace) {
		System.out.println("\nGet CurrentAirPollution");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "http://api.openweathermap.org/data/2.5/air_pollution?lat="+city.getCoord().getLat()+"&lon="+city.getCoord().getLon()+"&appid=6f2d2019a1c929b9d3599e7d511bfe03";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		AirPollution pollution = gson.fromJson(result, AirPollution.class);
		AirPollutionDTO dto = new AirPollutionDTO(searchPlace,pollution);
		return dto;
	}

	@Override
	public AirPollutionDTO getForecastAirPollution(String searchPlace) {
		System.out.println("\nGet ForecastAirPollution");
		
		City city = cityS.findByName(searchPlace);
		if(city==null) {
			System.out.println("Nisam ga naso u bazi!");
			city = cityS.getCityFromNet(searchPlace);
		}
		
		String uri = "http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat="+city.getCoord().getLat()+"&lon="+city.getCoord().getLon()+"&appid=6f2d2019a1c929b9d3599e7d511bfe03";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    Gson gson = new Gson();
		AirPollution pollution = gson.fromJson(result, AirPollution.class);
		int index = 0;
//		SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");  
	    Date date = new Date();  
//	    System.out.println(formatter.format(date));
		for (AirInformation ai : pollution.getList()) {
			Date aiDate = new Date((long)ai.getDt()*1000);
//			System.out.println(formatter.format(aiDate));
//			System.out.println(aiDate.getTime()+">"+date.getTime());
			if(aiDate.getTime()>date.getTime()) {
//				System.out.println(ai.getDt()+">"+date.getTime());
				index = pollution.getList().indexOf(ai);
				break;
			}
		}
		pollution.setList(pollution.getList().subList(index, pollution.getList().size()-1));
		List<AirInformation> list = new ArrayList<AirInformation>();
		for (int i = 0; i < pollution.getList().size()-1; i++) {
			if(i%6==0) {
				list.add(pollution.getList().get(i));
			}
		}
		pollution.setList(list);
		AirPollutionDTO dto = new AirPollutionDTO(searchPlace,pollution);
		return dto;
	}

}
