package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.model.Mosquito;
import com.ftn.diplomski.model.Pollen;
import com.ftn.diplomski.modelDTO.MosquitoDTO;
import com.ftn.diplomski.modelDTO.PollenDTO;
import com.ftn.diplomski.repository.PollenRepository;
import com.ftn.diplomski.service.AreaInterface;
import com.ftn.diplomski.service.PollenInterface;
import com.ftn.diplomski.tools.DateDeserializer;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Service
public class PollenService implements PollenInterface {

	@Autowired
	PollenRepository repository;
	
	@Autowired
	private AreaInterface areaService;
	
	@Override
	public Pollen save(Pollen pollen) {
		// TODO Auto-generated method stub
		return repository.save(pollen);
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<PollenDTO> getPollen(String areaName) {
		System.out.println("\nGet Pollen");
		Area area = areaService.findByName(areaName);
		Date maxDate = maxDate(area.getKey());
		List<Pollen> pollen = null;
		if(maxDate==null || (maxDate.getYear()<=new Date().getYear() && maxDate.getMonth()<=new Date().getMonth() && maxDate.getDate()<new Date().getDate())) {
			pollen = getPollenFromApi(areaName);
		}else {
			pollen = getPollenFromDataBase(areaName);
		}
		List<PollenDTO> dtos = new ArrayList<PollenDTO>();
		for (Pollen p : pollen) {
			dtos.add(new PollenDTO(p));
		}
		return dtos;
	}

	@Override
	public List<Pollen> getPollenFromApi(String areaName) {
		System.out.println("\ngetPollenFromApi");
		Area area = areaService.findByName(areaName);
		String uri = "http://dataservice.accuweather.com/indices/v1/daily/1day/"+area.getKey()+"/groups/30?apikey=y54vBB02AY7sepadhRyLkWSw2P4II3kH&language=sr&details=true";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

//		String result = "[\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Polen drveća\",\r\n" + 
//				"        \"ID\": -14,\r\n" + 
//				"        \"Ascending\": false,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-11T07:00:00+02:00\",\r\n" + 
//				"        \"EpochDateTime\": 1623214800,\r\n" + 
//				"        \"Value\": 1.0,\r\n" + 
//				"        \"Category\": \"Nisko\",\r\n" + 
//				"        \"CategoryValue\": 1,\r\n" + 
//				"        \"Text\": \"Nivo polena drveća će biti nizak.\",\r\n" + 
//				"        \"MobileLink\": \"http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\",\r\n" + 
//				"        \"Link\": \"http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\"\r\n" + 
//				"    },\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Polen ambrozije\",\r\n" + 
//				"        \"ID\": -13,\r\n" + 
//				"        \"Ascending\": false,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-09T07:00:00+02:00\",\r\n" + 
//				"        \"EpochDateTime\": 1623214800,\r\n" + 
//				"        \"Value\": 1.0,\r\n" + 
//				"        \"Category\": \"Nisko\",\r\n" + 
//				"        \"CategoryValue\": 1,\r\n" + 
//				"        \"Text\": \"Nivo polena ambrozije će biti nizak.\",\r\n" + 
//				"        \"MobileLink\": \"http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\",\r\n" + 
//				"        \"Link\": \"http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\"\r\n" + 
//				"    },\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Plesan\",\r\n" + 
//				"        \"ID\": -12,\r\n" + 
//				"        \"Ascending\": false,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-09T07:00:00+02:00\",\r\n" + 
//				"        \"EpochDateTime\": 1623214800,\r\n" + 
//				"        \"Value\": 1.0,\r\n" + 
//				"        \"Category\": \"Nisko\",\r\n" + 
//				"        \"CategoryValue\": 1,\r\n" + 
//				"        \"Text\": \"Nivo buđi će biti nizak.\",\r\n" + 
//				"        \"MobileLink\": \"http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\",\r\n" + 
//				"        \"Link\": \"http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\"\r\n" + 
//				"    },\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Polen iz trave\",\r\n" + 
//				"        \"ID\": -11,\r\n" + 
//				"        \"Ascending\": false,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-09T07:00:00+02:00\",\r\n" + 
//				"        \"EpochDateTime\": 1623214800,\r\n" + 
//				"        \"Value\": 1.0,\r\n" + 
//				"        \"Category\": \"Nisko\",\r\n" + 
//				"        \"CategoryValue\": 1,\r\n" + 
//				"        \"Text\": \"Nivo polena iz trave će biti nizak.\",\r\n" + 
//				"        \"MobileLink\": \"http://m.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\",\r\n" + 
//				"        \"Link\": \"http://www.accuweather.com/sr/rs/novi-sad/298486/allergies-weather/298486\"\r\n" + 
//				"    }\r\n" + 
//				"]";
	    GsonBuilder gsonBuilder = new GsonBuilder();
	    gsonBuilder.registerTypeAdapter(Date.class, new DateDeserializer());
	    Gson gson = gsonBuilder.create();
	    List<Pollen> pollen = Arrays.asList(gson.fromJson(result, Pollen[].class));
	    for (Pollen p : pollen) {
	    	p.setKey(area.getKey());
	    	p.setId(save(p).getId());
		}
		return pollen;
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Pollen> getPollenFromDataBase(String areaName) {
		System.out.println("\ngetPollenFromDataBase");
		Area area = areaService.findByName(areaName);
//		System.out.println(area.getCoord().getLat()+" " + area.getCoord().getLon()+" " + new Date().getDate()+" " + (new Date().getMonth()+1)+" " + (new Date().getYear()+1900));
		List<Pollen> pollen = repository.getPollenFromDataBase(area.getKey(), new Date().getDate(), new Date().getMonth()+1, new Date().getYear()+1900);
		return pollen;
	}

	@Override
	public Date maxDate(Long key) {
		// TODO Auto-generated method stub
		return repository.maxDate(key);
	}

}
