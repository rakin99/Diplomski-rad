package com.ftn.diplomski.model;

public class Weather {

	private long id;
	private String main;
	private String description;
	private String icon;
	
	public Weather() {
		super();
		this.id = 0;
		this.main = "";
		this.description = "";
		this.icon = "";
	}
	
	public Weather(long id, String main, String description, String icon) {
		super();
		this.id = id;
		this.main = main;
		this.description = description;
		this.icon = icon;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getMain() {
		return main;
	}
	public void setMain(String main) {
		this.main = main;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
}
