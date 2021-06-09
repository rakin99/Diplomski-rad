package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.AirPollution;
import com.ftn.diplomski.model.Alerts;
import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.model.Mosquito;
import com.ftn.diplomski.modelDTO.AlertsDTO;
import com.ftn.diplomski.modelDTO.MosquitoDTO;
import com.ftn.diplomski.repository.MosquitoRepository;
import com.ftn.diplomski.service.AreaInterface;
import com.ftn.diplomski.service.MosquitoInterface;
import com.ftn.diplomski.tools.DateDeserializer;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Service
public class MosquitoService implements MosquitoInterface {

	@Autowired
	MosquitoRepository repository;
	
	@Autowired
	private AreaInterface areaService;
	
	@Override
	public Mosquito save(Mosquito mosquito) {
		// TODO Auto-generated method stub
		return repository.save(mosquito);
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<MosquitoDTO> getMosquito(String areaName) {
		System.out.println("\nGet Mosquito");
		Area area = areaService.findByName(areaName);
		System.out.println("Lat: "+area.getCoord().getLat()+" Lon: "+area.getCoord().getLon());
		Date maxDate = maxDate(area.getKey());
		if(maxDate==null || (maxDate.getYear()<new Date().getYear()+1900 && maxDate.getMonth()<new Date().getMonth() && maxDate.getDate()<new Date().getDate())) {
			List<Mosquito> mosquitos = getMosquitoFromApi(areaName);
			List<MosquitoDTO> dtos = new ArrayList<MosquitoDTO>();
			for (Mosquito mosquito : mosquitos) {
				dtos.add(new MosquitoDTO(mosquito));
			}
			return dtos;
		}
		List<Mosquito> mosquitos = getMosquitoFromDataBase(areaName);
		List<MosquitoDTO> dtos = new ArrayList<MosquitoDTO>();
		for (Mosquito mosquito : mosquitos) {
			dtos.add(new MosquitoDTO(mosquito));
		}
		return dtos;
	}

	@Override
	public List<Mosquito> getMosquitoFromApi(String areaName) {
		System.out.println("\ngetMosquitoFromApi");
		Area area = areaService.findByName(areaName);
		String uri = "http://dataservice.accuweather.com/indices/v1/daily/1day/"+area.getKey()+"/groups/59?apikey=epzdghDAHtEQdn0aSiCciSXpvny51yuT&language=sr&details=true";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

//		String result = "[\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Prognoza za aktivnost komaraca\",\r\n" + 
//				"        \"ID\": 17,\r\n" + 
//				"        \"Ascending\": true,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-09T07:00:00+02:00\",\r\n" + 
//				"        \"EpochDateTime\": 1623214800,\r\n" + 
//				"        \"Value\": 2.0,\r\n" + 
//				"        \"Category\": \"Umereno\",\r\n" + 
//				"        \"CategoryValue\": 2,\r\n" + 
//				"        \"Text\": \"Vremenski uslovi će pogodovati umerenoj aktivnosti komaraca.\",\r\n" + 
//				"        \"MobileLink\": \"http://m.accuweather.com/sr/rs/novi-sad/298486/mosquito-activity-weather/298486\",\r\n" + 
//				"        \"Link\": \"http://www.accuweather.com/sr/rs/novi-sad/298486/mosquito-activity-weather/298486\"\r\n" + 
//				"    }\r\n" + 
//				"]";
	    GsonBuilder gsonBuilder = new GsonBuilder();
	    gsonBuilder.registerTypeAdapter(Date.class, new DateDeserializer());
	    Gson gson = gsonBuilder.create();
	    List<Mosquito> mosquitos = Arrays.asList(gson.fromJson(result, Mosquito[].class));
	    for (Mosquito mosquito : mosquitos) {
	    	mosquito.setKey(area.getKey());
			mosquito.setId(save(mosquito).getId());
		}
		return mosquitos;
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Mosquito> getMosquitoFromDataBase(String areaName) {
		System.out.println("\ngetMosquitoFromDataBase");
		Area area = areaService.findByName(areaName);
//		System.out.println(area.getCoord().getLat()+" " + area.getCoord().getLon()+" " + new Date().getDate()+" " + (new Date().getMonth()+1)+" " + (new Date().getYear()+1900));
		List<Mosquito> mosquitos = repository.getMosquitoesFromDataBase(area.getKey(), new Date().getDate(), new Date().getMonth()+1, new Date().getYear()+1900);
		return mosquitos;
	}

	@Override
	public Date maxDate(Long key) {
		// TODO Auto-generated method stub
		return repository.maxDate(key);
	}

}
