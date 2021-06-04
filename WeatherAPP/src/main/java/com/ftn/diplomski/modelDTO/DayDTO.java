package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.List;

import com.ftn.diplomski.model.Day;
import com.ftn.diplomski.model.Temp;
import com.ftn.diplomski.model.Weather;

public class DayDTO {
	private Long dt;
	private TempDTO temp;    
	private Long pressure;
	private Long humidity;
	private double wind_speed;
	private List<WeatherDTO> weather = new ArrayList<WeatherDTO>();
	
	public DayDTO(Long dt, Temp temp,
			Long pressure, Long humidity, double wind_speed, List<Weather> weathers) {
		super();
		this.dt = dt;
		this.temp = new TempDTO(temp);
		this.pressure = pressure;
		this.humidity = humidity;
		this.wind_speed = wind_speed;
		for (Weather w : weathers) {
			this.weather.add(new WeatherDTO(w));
		}
	}
	
	public DayDTO(Day d) {
		this(d.getDt(),d.getTemp(),d.getPressure(),d.getHumidity(),d.getWind_speed(),d.getWeather());
	}

	public DayDTO() {
		super();
		this.dt = (long) 0;
		this.temp = new TempDTO();
		this.pressure = (long) 0;
		this.humidity = (long) 0;
		this.wind_speed = 0;
	}

	public Long getDt() {
		return dt;
	}

	public void setDt(Long dt) {
		this.dt = dt;
	}

	public TempDTO getTemp() {
		return temp;
	}

	public void setTemp(TempDTO temp) {
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

	public void setWeather(List<WeatherDTO> weathers) {
		this.weather = weathers;
	}
}
