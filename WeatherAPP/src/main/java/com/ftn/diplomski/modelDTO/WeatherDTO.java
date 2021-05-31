package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.Weather;

public class WeatherDTO {

	private String description;
	private String icon;
	
	public WeatherDTO() {
		super();
		this.description = "";
		this.icon = "";
	}
	
	public WeatherDTO(String description, String icon) {
		super();
		this.description = description;
		this.icon = icon;
	}
	
	public WeatherDTO(Weather w) {
		this(w.getDescription(),w.getIcon());
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
}
