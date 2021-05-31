package com.ftn.diplomski.model;

import java.util.ArrayList;
import java.util.List;

public class CurrentWeather {

	private Coordination coord;
	private List<Weather> weather = new ArrayList<Weather>();
	private String base;
	private MainInformation main;
	private long visibility;
	private Wind wind;
	private Clouds clouds;
	private long dt;
	private Sys sys;
	private long timezone;
	private long id;
	private String name;
	private long code;
	
	public CurrentWeather(Coordination coord, List<Weather> weather, String base, MainInformation main, long visibility,
			Wind wind, Clouds clouds, long dt, Sys sys, long timezone, long id, String name, long code) {
		super();
		this.coord = coord;
		this.weather = weather;
		this.base = base;
		this.main = main;
		this.visibility = visibility;
		this.wind = wind;
		this.clouds = clouds;
		this.dt = dt;
		this.sys = sys;
		this.timezone = timezone;
		this.id = id;
		this.name = name;
		this.code = code;
	}

	public CurrentWeather() {
		super();
		this.coord = new Coordination();
		this.base = "";
		this.main = new MainInformation();
		this.visibility = 0;
		this.wind = new Wind();
		this.clouds = new Clouds();
		this.dt = 0;
		this.sys = new Sys();
		this.timezone = 0;
		this.id = 0;
		this.name = "";
		this.code = 0;
	}

	public Coordination getCoord() {
		return coord;
	}

	public void setCoord(Coordination coord) {
		this.coord = coord;
	}

	public List<Weather> getWeather() {
		return weather;
	}

	public void setWeather(List<Weather> weather) {
		this.weather = weather;
	}

	public String getBase() {
		return base;
	}

	public void setBase(String base) {
		this.base = base;
	}

	public MainInformation getMain() {
		return main;
	}

	public void setMain(MainInformation main) {
		this.main = main;
	}

	public long getVisibility() {
		return visibility;
	}

	public void setVisibility(long visibility) {
		this.visibility = visibility;
	}

	public Wind getWind() {
		return wind;
	}

	public void setWind(Wind wind) {
		this.wind = wind;
	}

	public Clouds getClouds() {
		return clouds;
	}

	public void setClouds(Clouds clouds) {
		this.clouds = clouds;
	}

	public long getDt() {
		return dt;
	}

	public void setDt(long dt) {
		this.dt = dt;
	}

	public Sys getSys() {
		return sys;
	}

	public void setSys(Sys sys) {
		this.sys = sys;
	}

	public long getTimezone() {
		return timezone;
	}

	public void setTimezone(long timezone) {
		this.timezone = timezone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getCode() {
		return code;
	}

	public void setCode(long code) {
		this.code = code;
	}
}
