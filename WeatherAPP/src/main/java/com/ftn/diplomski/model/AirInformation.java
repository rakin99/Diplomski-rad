package com.ftn.diplomski.model;

public class AirInformation {

	private MainAirPollution main;
	private Components components;
	private Long dt;
	
	public AirInformation(MainAirPollution main, Components components, Long dt) {
		super();
		this.main = main;
		this.components = components;
		this.dt = dt;
	}
	
	public AirInformation() {
		super();
		this.main = new MainAirPollution();
		this.components = new Components();
		this.dt = (long) 0;
	}

	public MainAirPollution getMain() {
		return main;
	}

	public void setMain(MainAirPollution main) {
		this.main = main;
	}

	public Components getComponents() {
		return components;
	}

	public void setComponents(Components components) {
		this.components = components;
	}

	public Long getDt() {
		return dt;
	}

	public void setDt(Long dt) {
		this.dt = dt;
	}
}
