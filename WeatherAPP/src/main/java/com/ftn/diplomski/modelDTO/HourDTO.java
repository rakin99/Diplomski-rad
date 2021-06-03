package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.List;

import com.ftn.diplomski.model.Hour;
import com.ftn.diplomski.model.Weather;

public class HourDTO {
	
	private Long dt;
	private double temp;
	private Long pressure;
	private Long humidity;
	private double wind_speed;
	private List<WeatherDTO> weather = new ArrayList<WeatherDTO>();
	
	public HourDTO() {
		super();
		this.dt = (long) 0;
		this.temp = 0;
		this.pressure = (long) 0;
		this.humidity = (long) 0;
		this.wind_speed = 0;
	}
	
	public HourDTO(Long dt, double temp, Long pressure, Long humidity, double wind_speed, List<Weather> weather) {
		super();
		this.dt = dt;
		this.temp = temp;
		this.pressure = pressure;
		this.humidity = humidity;
		this.wind_speed = wind_speed;
		for (Weather w : weather) {
			this.weather.add(new WeatherDTO(w));
		}
	}
	
	public HourDTO(Hour h) {
		this(h.getDt(),h.getTemp(),h.getPressure(),h.getHumidity(),h.getWind_speed(),h.getWeather());
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
	public double getWind_speed() {
		return wind_speed;
	}
	public void setWind_speed(double wind_speed) {
		this.wind_speed = wind_speed;
	}
	public List<WeatherDTO> getWeather() {
		return weather;
	}
	public void setWeather(List<WeatherDTO> weather) {
		this.weather = weather;
	}
}
