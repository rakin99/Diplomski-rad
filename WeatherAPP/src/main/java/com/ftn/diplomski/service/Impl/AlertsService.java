package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ftn.diplomski.model.Alerts;
import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.repository.AlertsRepository;
import com.ftn.diplomski.service.AlertsInterface;
import com.ftn.diplomski.service.AreaInterface;
import com.ftn.diplomski.tools.DateDeserializer;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@Service
public class AlertsService implements AlertsInterface {

	@Autowired
	private AlertsRepository repository;
	
	@Autowired
	private AreaInterface areaService;
	
	@Override
	public Alerts save(Alerts alerts) {
		return repository.save(alerts);
	}

	@Override
	public Alerts getAlerts(String areaName) {
		System.out.println("\nGet alerts");
		Area area = areaService.findByName(areaName);
		System.out.println("Lat: "+area.getCoord().getLat()+" Lon: "+area.getCoord().getLon());
		Date maxDate = maxDate(area.getCoord().getLat(), area.getCoord().getLon());
		if(maxDate==null || (maxDate.getYear()<new Date().getYear()+1900 && maxDate.getMonth()<new Date().getMonth() && maxDate.getDate()<new Date().getDate())) {
			return getAlertsFromApi(areaName);
		}
		Alerts alerts = getAlertsFromDataBase(areaName);
//		System.out.println(alerts.toString());
		return alerts;
	}

	@Override
	public Date maxDate(double lat,double lon) {
		// TODO Auto-generated method stub
		return repository.maxDate(lat,lon);
	}

	@Override
	public Alerts getAlertsFromApi(String areaName) {
		System.out.println("\ngetAlertsFromApi");
		Area area = areaService.findByName(areaName);
		String uri = "https://weatherbit-v1-mashape.p.rapidapi.com/alerts?lat="+area.getCoord().getLat()+"&lon="+area.getCoord().getLon()+"&units=metric&lang=sr";
		System.out.println(uri);
		
		HttpHeaders headers = new HttpHeaders();
		headers.set("x-rapidapi-key", "509f30df3fmsh0ea7e8f61e0e95ep1f8b72jsn77d53241cd96");
		headers.set("x-rapidapi-host", "weatherbit-v1-mashape.p.rapidapi.com");

		HttpEntity<String> entityReq = new HttpEntity<String>("parameters", headers);
	    
		RestTemplate restTemplate = new RestTemplate();
	    ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entityReq, String.class);

	    GsonBuilder gsonBuilder = new GsonBuilder();
	    gsonBuilder.registerTypeAdapter(Date.class, new DateDeserializer());
	    Gson gson = gsonBuilder.create();
		Alerts alerts = gson.fromJson(result.getBody(), Alerts.class);
		alerts.setDate(new Date());
		alerts.setAlertsMemberAlerts();
		alerts = save(alerts);
		return alerts;
	}

	@SuppressWarnings("deprecation")
	@Override
	public Alerts getAlertsFromDataBase(String areaName) {
		System.out.println("\ngetAlertsFromDataBase");
		Area area = areaService.findByName(areaName);
		System.out.println(area.getCoord().getLat()+" " + area.getCoord().getLon()+" " + new Date().getDate()+" " + (new Date().getMonth()+1)+" " + (new Date().getYear()+1900));
		Alerts alerts = repository.getAlertsFromDataBase(area.getCoord().getLat(), area.getCoord().getLon(), new Date().getDate(), new Date().getMonth()+1, new Date().getYear()+1900);
		return alerts;
	}

}
