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
import org.springframework.transaction.annotation.Transactional;
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
@Transactional(rollbackFor=Exception.class)
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

	@Override
	public List<MosquitoDTO> getMosquito(String areaName) {
		System.out.println("\nGet Mosquito");
//		Area area = areaService.findByName(areaName);
//		Date maxDate = maxDate();
//		Date d = new Date();
//		if(maxDate!=null) {
//			maxDate.setTime(maxDate.getTime()+86400000);
//			System.out.println("\nMax date: "+maxDate.getTime());
//			System.out.println("\nDate: "+d.getTime());
//		}
		List<Mosquito> mosquitos = null;
//		if(maxDate==null || (maxDate.getTime()<d.getTime())) {
//			mosquitos = getMosquitoFromApi(area);
//		}
		mosquitos = getMosquitoFromDataBase(areaName);
		List<MosquitoDTO> dtos = new ArrayList<MosquitoDTO>();
		for (Mosquito mosquito : mosquitos) {
			dtos.add(new MosquitoDTO(mosquito));
		}
		return dtos;
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Mosquito> getMosquitoFromApi(Area area) {
		System.out.println("\ngetMosquitoFromApi");
//		Area area = areaService.findByName(areaName);
		String uri = "http://dataservice.accuweather.com/indices/v1/daily/1day/"+area.getKey()+"/groups/59?apikey=epzdghDAHtEQdn0aSiCciSXpvny51yuT&language=sr&details=true";
		
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);

//		String result = "[\r\n" + 
//				"    {\r\n" + 
//				"        \"Name\": \"Prognoza za aktivnost komaraca\",\r\n" + 
//				"        \"ID\": 17,\r\n" + 
//				"        \"Ascending\": true,\r\n" + 
//				"        \"LocalDateTime\": \"2021-06-10T07:00:00+02:00\",\r\n" + 
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
	    	mosquito.setLocalDateTime(new Date(mosquito.getLocalDateTime().getYear(),mosquito.getLocalDateTime().getMonth(),mosquito.getLocalDateTime().getDate()));
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
	public Date maxDate() {
		// TODO Auto-generated method stub
		return repository.maxDate();
	}

	@Override
	public void saveMosquitoForAllAreas() {
		System.out.println("\nSave Mosquito For All Areas\n");
		Date maxDate = maxDate();
		Date d = new Date();
		if(maxDate!=null) {
			maxDate.setTime(maxDate.getTime()+86400000);
//			System.out.println("\nMax date: "+maxDate.getTime());
//			System.out.println("\nDate: "+d.toString());
		}
		if(maxDate==null || (maxDate.getTime()<d.getTime())) {
			List<Area> areas = areaService.findAll();
			System.out.println("Pocinjem sa zahtevima ka apiju");
			for (Area area : areas) {
					getMosquitoFromApi(area);
			}
			System.out.println("Sacuvao sve aktivnosti komaraca");
		}else {
			System.out.println("\nNisam prosao u IF!\n");
		}
	}

}
