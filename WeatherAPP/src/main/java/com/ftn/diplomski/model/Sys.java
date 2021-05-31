package com.ftn.diplomski.model;

public class Sys {

	private long type;
	private long id;
	private String country;
	private long sunrise;
	private long sunset;
	
	public Sys() {
		super();
		this.type = 0;
		this.id = 0;
		this.country = "";
		this.sunrise = 0;
		this.sunset = 0;
	}
	
	public Sys(long type, long id, String country, long sunrise, long sunset) {
		super();
		this.type = type;
		this.id = id;
		this.country = country;
		this.sunrise = sunrise;
		this.sunset = sunset;
	}
	
	public long getType() {
		return type;
	}
	public void setType(long type) {
		this.type = type;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	public long getSunrise() {
		return sunrise;
	}
	public void setSunrise(long sunrise) {
		this.sunrise = sunrise;
	}
	
	public long getSunset() {
		return sunset;
	}
	public void setSunset(long sunset) {
		this.sunset = sunset;
	}
}
