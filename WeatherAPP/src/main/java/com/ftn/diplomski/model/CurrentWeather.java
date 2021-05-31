package com.ftn.diplomski.model;

public class CurrentWeather {

	private String coord;
	private String weather;
	private String base;
	private String main;
	private String visibility;
	private String wind;
	private String clouds;
	private String dt;
	private String sys;
	private String timezone;
	private String id;
	private String name;
	private String code;
	
	public String getCoord() {
		return coord;
	}
	public void setCoord(String coord) {
		this.coord = coord;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public String getBase() {
		return base;
	}
	public void setBase(String base) {
		this.base = base;
	}
	public String getMain() {
		return main;
	}
	public void setMain(String main) {
		this.main = main;
	}
	public String getVisibility() {
		return visibility;
	}
	public void setVisibility(String visibility) {
		this.visibility = visibility;
	}
	public String getWind() {
		return wind;
	}
	public void setWind(String wind) {
		this.wind = wind;
	}
	public String getClouds() {
		return clouds;
	}
	public void setClouds(String clouds) {
		this.clouds = clouds;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getSys() {
		return sys;
	}
	public void setSys(String sys) {
		this.sys = sys;
	}
	public String getTimezone() {
		return timezone;
	}
	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	public CurrentWeather() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
//	currentWeather:{
//    "coord": {
//        "lon": 19.8369,
//        "lat": 45.2517
//    },
//    "weather": [
//        {
//            "id": 802,
//            "main": "Clouds",
//            "description": "ведро небо",
//            "icon": "03d"
//        }
//    ],
//    "base": "stations",
//    "main": {
//        "temp": 11.98,
//        "feels_like": 11.22,
//        "temp_min": 11.11,
//        "temp_max": 12.78,
//        "pressure": 1014,
//        "humidity": 76
//    },
//    "visibility": 10000,
//    "wind": {
//        "speed": 3.6,
//        "deg": 250
//    },
//    "clouds": {
//        "all": 40
//    },
//    "dt": 1618917466,
//    "sys": {
//        "type": 1,
//        "id": 7030,
//        "country": "RS",
//        "sunrise": 1618890404,
//        "sunset": 1618939917
//    },
//    "timezone": 7200,
//    "id": 3194360,
//    "name": "Novi Sad",
//    "cod": 200
//},
}
