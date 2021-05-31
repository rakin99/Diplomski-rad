package com.ftn.diplomski.model;

public class MainInformation {
	
	private double temp;
	private double feels_like;
	private double temp_min;
	private double temp_max;
	private long pressure;
	private long humidity;
	
	public MainInformation() {
		super();
		this.temp = 0;
		this.feels_like = 0;
		this.temp_min = 0;
		this.temp_max = 0;
		this.pressure = 0;
		this.humidity = 0;
	}
	
	public MainInformation(double temp, double feels_like, double temp_min, double temp_max, long pressure,
			long humidity) {
		super();
		this.temp = temp;
		this.feels_like = feels_like;
		this.temp_min = temp_min;
		this.temp_max = temp_max;
		this.pressure = pressure;
		this.humidity = humidity;
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
	
	public double getTemp_min() {
		return temp_min;
	}
	public void setTemp_min(double temp_min) {
		this.temp_min = temp_min;
	}
	
	public double getTemp_max() {
		return temp_max;
	}
	public void setTemp_max(double temp_max) {
		this.temp_max = temp_max;
	}
	
	public long getPressure() {
		return pressure;
	}
	public void setPressure(long pressure) {
		this.pressure = pressure;
	}
	
	public long getHumidity() {
		return humidity;
	}
	public void setHumidity(long humidity) {
		this.humidity = humidity;
	}
}
