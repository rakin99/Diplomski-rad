package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.ftn.diplomski.model.Forecast;
import com.ftn.diplomski.model.Hour;

public class ForecastDTO {
	
	private String cityName;
	private Long date;
	private List<HourDTO> hourly = new ArrayList<HourDTO>();
	
	public ForecastDTO(String cityName, List<HourDTO> hourly,Long date) {
		super();
		this.cityName = cityName;
		this.hourly = hourly;
		this.date = date;
	}
	
	public ForecastDTO(String cityName,Forecast f,Long date) {
		super();
		this.cityName = cityName;
		this.date = date;
		for (Hour h : f.getHourly()) {
			this.hourly.add(new HourDTO(h));
		}
	}
	
	public ForecastDTO() {
		super();
		this.cityName = "";
		this.date = (long) 0;
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public List<HourDTO> getHourly() {
		return hourly;
	}

	public void setHourly(List<HourDTO> hourly) {
		this.hourly = hourly;
	}

	public Long getDate() {
		return date;
	}

	public void setDate(Long date) {
		this.date = date;
	}
}
