package com.ftn.diplomski.model;

import java.util.ArrayList;
import java.util.List;

public class Day {
	private Long dt;
	private Long sunrise;
	private Long sunset;
	private Long moonrise;
	private Long moonset;
	private double moon_phase;
	private Temp temp;    
	private FeelsLike feels_like;
	private Long pressure;
	private Long humidity;
	private double dew_point;
	private double wind_speed;
	private Long wind_deg;
	private double wind_gust;
	private List<Weather> weather = new ArrayList<Weather>();
	private Long clouds;
	private double pop;
	private double uvi;
	
	public Day(Long dt, Long sunrise, Long sunset, Long moonrise, Long moonset, double moon_phase, Temp temp,
			FeelsLike feels_like, Long pressure, Long humidity, double dew_point, double wind_speed, Long wind_deg,
			double wind_gust, List<Weather> weathers, Long clouds, double pop, double uvi) {
		super();
		this.dt = dt;
		this.sunrise = sunrise;
		this.sunset = sunset;
		this.moonrise = moonrise;
		this.moonset = moonset;
		this.moon_phase = moon_phase;
		this.temp = temp;
		this.feels_like = feels_like;
		this.pressure = pressure;
		this.humidity = humidity;
		this.dew_point = dew_point;
		this.wind_speed = wind_speed;
		this.wind_deg = wind_deg;
		this.wind_gust = wind_gust;
		this.weather = weathers;
		this.clouds = clouds;
		this.pop = pop;
		this.uvi = uvi;
	}

	public Day() {
		super();
		this.dt = (long) 0;
		this.sunrise = (long) 0;
		this.sunset = (long) 0;
		this.moonrise = (long) 0;
		this.moonset = (long) 0;
		this.moon_phase = (long) 0;
		this.temp = new Temp();
		this.feels_like = new FeelsLike();
		this.pressure = (long) 0;
		this.humidity = (long) 0;
		this.dew_point = 0;
		this.wind_speed = 0;
		this.wind_deg = (long) 0;
		this.wind_gust = 0;
		this.clouds = (long) 0;
		this.pop = (long) 0;
		this.uvi = 0;
	}

	public Long getDt() {
		return dt;
	}

	public void setDt(Long dt) {
		this.dt = dt;
	}

	public Long getSunrise() {
		return sunrise;
	}

	public void setSunrise(Long sunrise) {
		this.sunrise = sunrise;
	}

	public Long getSunset() {
		return sunset;
	}

	public void setSunset(Long sunset) {
		this.sunset = sunset;
	}

	public Long getMoonrise() {
		return moonrise;
	}

	public void setMoonrise(Long moonrise) {
		this.moonrise = moonrise;
	}

	public Long getMoonset() {
		return moonset;
	}

	public void setMoonset(Long moonset) {
		this.moonset = moonset;
	}

	public double getMoon_phase() {
		return moon_phase;
	}

	public void setMoon_phase(double moon_phase) {
		this.moon_phase = moon_phase;
	}

	public Temp getTemp() {
		return temp;
	}

	public void setTemp(Temp temp) {
		this.temp = temp;
	}

	public FeelsLike getFeels_like() {
		return feels_like;
	}

	public void setFeels_like(FeelsLike feels_like) {
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

	public double getWind_speed() {
		return wind_speed;
	}

	public void setWind_speed(double wind_speed) {
		this.wind_speed = wind_speed;
	}

	public Long getWind_deg() {
		return wind_deg;
	}

	public void setWind_deg(Long wind_deg) {
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

	public Long getClouds() {
		return clouds;
	}

	public void setClouds(Long clouds) {
		this.clouds = clouds;
	}

	public double getPop() {
		return pop;
	}

	public void setPop(double pop) {
		this.pop = pop;
	}

	public double getUvi() {
		return uvi;
	}

	public void setUvi(double uvi) {
		this.uvi = uvi;
	}
}
