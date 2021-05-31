package com.ftn.diplomski.model;

import java.util.ArrayList;
import java.util.List;

import com.mysql.fabric.xmlrpc.base.Array;

public class Hour {
	
	private Long dt;
	private double temp;
	private double feels_like;
	private Long pressure;
	private Long humidity;
	private double dew_point;
	private double uvi;
	private Long clouds;
	private Long visibility;
	private double wind_speed;
	private double wind_deg;
	private double wind_gust;
	private List<Weather> weather = new ArrayList<Weather>();
	private double pop;
	
	public Hour(Long dt, double temp, double feels_like, Long pressure, Long humidity, double dew_point, double uvi,
			Long clouds, Long visibility, double wind_speed, double wind_deg, double wind_gust, List<Weather> weather,
			double pop) {
		super();
		this.dt = dt;
		this.temp = temp;
		this.feels_like = feels_like;
		this.pressure = pressure;
		this.humidity = humidity;
		this.dew_point = dew_point;
		this.uvi = uvi;
		this.clouds = clouds;
		this.visibility = visibility;
		this.wind_speed = wind_speed;
		this.wind_deg = wind_deg;
		this.wind_gust = wind_gust;
		this.weather = weather;
		this.pop = pop;
	}
	
	public Hour() {
		super();
		this.dt = (long) 0;
		this.temp = 0;
		this.feels_like = 0;
		this.pressure = (long) 0;
		this.humidity = (long) 0;
		this.dew_point = 0;
		this.uvi = 0;
		this.clouds = (long) 0;
		this.visibility = (long) 0;
		this.wind_speed = 0;
		this.wind_deg = 0;
		this.wind_gust = 0;
		this.pop =(long) 0;
	}

	public Long getDt() {
		return dt;
	}

	public void setDt(Long dt) {
		this.dt = dt;
	}

	public double getTemp() {
		return temp;
	}

	public void setTemp(double temp) {
		this.temp = temp;
	}

	public double getFeels_like() {
		return feels_like;
	}

	public void setFeels_like(double feels_like) {
		this.feels_like = feels_like;
	}

	public Long getPressure() {
		return pressure;
	}

	public void setPressure(Long pressure) {
		this.pressure = pressure;
	}

	public Long getHumidity() {
		return humidity;
	}

	public void setHumidity(Long humidity) {
		this.humidity = humidity;
	}

	public double getDew_point() {
		return dew_point;
	}

	public void setDew_point(double dew_point) {
		this.dew_point = dew_point;
	}

	public double getUvi() {
		return uvi;
	}

	public void setUvi(double uvi) {
		this.uvi = uvi;
	}

	public Long getClouds() {
		return clouds;
	}

	public void setClouds(Long clouds) {
		this.clouds = clouds;
	}

	public Long getVisibility() {
		return visibility;
	}

	public void setVisibility(Long visibility) {
		this.visibility = visibility;
	}

	public double getWind_speed() {
		return wind_speed;
	}

	public void setWind_speed(double wind_speed) {
		this.wind_speed = wind_speed;
	}

	public double getWind_deg() {
		return wind_deg;
	}

	public void setWind_deg(double wind_deg) {
		this.wind_deg = wind_deg;
	}

	public double getWind_gust() {
		return wind_gust;
	}

	public void setWind_gust(double wind_gust) {
		this.wind_gust = wind_gust;
	}

	public List<Weather> getWeather() {
		return weather;
	}

	public void setWeather(List<Weather> weather) {
		this.weather = weather;
	}

	public double getPop() {
		return pop;
	}

	public void setPop(double pop) {
		this.pop = pop;
	}
}
