package com.ftn.diplomski.model;

import java.util.ArrayList;
import java.util.List;

public class Forecast {
	
	private double lat;
	private double lon;
	private String timezone;
	private Long timezone_offset;
	private List<Hour> hourly = new ArrayList<Hour>();
	private List<Day> daily = new ArrayList<Day>();
	
	public Forecast(double lat, double lon, String timezone, Long timezone_offset, List<Hour> hourly, List<Day> daily) {
		super();
		this.lat = lat;
		this.lon = lon;
		this.timezone = timezone;
		this.timezone_offset = timezone_offset;
		this.hourly = hourly;
		this.daily = daily;
	}

	public Forecast() {
		super();
		this.lat = 0;
		this.lon = 0;
		this.timezone = "";
		this.timezone_offset = (long) 0;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public String getTimezone() {
		return timezone;
	}

	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

	public Long getTimezone_offset() {
		return timezone_offset;
	}

	public void setTimezone_offset(Long timezone_offset) {
		this.timezone_offset = timezone_offset;
	}

	public List<Hour> getHourly() {
		return hourly;
	}

	public void setHourly(List<Hour> hourly) {
		this.hourly = hourly;
	}

	public List<Day> getDaily() {
		return daily;
	}

	public void setDaily(List<Day> daily) {
		this.daily = daily;
	}
}
