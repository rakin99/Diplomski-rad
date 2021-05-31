package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.List;

import com.ftn.diplomski.model.Clouds;
import com.ftn.diplomski.model.Coordination;
import com.ftn.diplomski.model.CurrentWeather;
import com.ftn.diplomski.model.MainInformation;
import com.ftn.diplomski.model.Sys;
import com.ftn.diplomski.model.Weather;
import com.ftn.diplomski.model.Wind;

public class CurrentWeatherDTO {

	private List<WeatherDTO> weather = new ArrayList<WeatherDTO>();
	private MainInformationDTO main;
	private long visibility;
	private WindDTO wind;
	private long dt;
	private String name;
	
	public CurrentWeatherDTO(List<Weather> weather, MainInformation main, long visibility, Wind wind,
			long dt, String name) {
		super();
		for (Weather w : weather) {
			this.weather.add(new WeatherDTO(w));
		}
		this.main = new MainInformationDTO(main);
		this.visibility = visibility;
		this.wind = new WindDTO(wind);
		this.dt = dt;
		this.name = name;
	}
	
	public CurrentWeatherDTO(CurrentWeather cw) {
		this(cw.getWeather(),cw.getMain(),cw.getVisibility(),cw.getWind(),cw.getDt(),cw.getName());
	}
	
	public CurrentWeatherDTO() {
		super();
		this.main = new MainInformationDTO();
		this.visibility = 0;
		this.wind = new WindDTO();
		this.dt = 0;
		this.name = "";
	}

	public List<WeatherDTO> getWeather() {
		return weather;
	}

	public void setWeather(List<WeatherDTO> weather) {
		this.weather = weather;
	}

	public MainInformationDTO getMain() {
		return main;
	}

	public void setMain(MainInformationDTO main) {
		this.main = main;
	}

	public long getVisibility() {
		return visibility;
	}

	public void setVisibility(long visibility) {
		this.visibility = visibility;
	}

	public WindDTO getWind() {
		return wind;
	}

	public void setWind(WindDTO wind) {
		this.wind = wind;
	}

	public long getDt() {
		return dt;
	}

	public void setDt(long dt) {
		this.dt = dt;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
