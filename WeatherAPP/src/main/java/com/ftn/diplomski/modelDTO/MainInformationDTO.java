package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.MainInformation;

public class MainInformationDTO {
	
	private double temp;
	private double temp_min;
	private double temp_max;
	private long pressure;
	private long humidity;
	
	public MainInformationDTO() {
		super();
		this.temp = 0;
		this.temp_min = 0;
		this.temp_max = 0;
		this.pressure = 0;
		this.humidity = 0;
	}
	
	public MainInformationDTO(double temp, double temp_min, double temp_max, long pressure,
			long humidity) {
		super();
		this.temp = temp;
		this.temp_min = temp_min;
		this.temp_max = temp_max;
		this.pressure = pressure;
		this.humidity = humidity;
	}
	
	public MainInformationDTO(MainInformation mi) {
		this(mi.getTemp(),mi.getTemp_min(),mi.getTemp_max(),mi.getPressure(),mi.getHumidity());
	}
	
	public double getTemp() {
		return temp;
	}
	public void setTemp(double temp) {
		this.temp = temp;
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
