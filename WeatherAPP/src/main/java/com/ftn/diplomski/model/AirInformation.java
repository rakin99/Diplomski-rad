package com.ftn.diplomski.model;

public class AirInformation {

	private MainAirPollutin main;
	private Components components;
	private Long dt;
	
	public AirInformation(MainAirPollutin main, Components components, Long dt) {
		super();
		this.main = main;
		this.components = components;
		this.dt = dt;
	}
	
	public AirInformation() {
		super();
		this.main = new MainAirPollutin();
		this.components = new Components();
		this.dt = (long) 0;
	}

	public MainAirPollutin getMain() {
		return main;
	}

	public void setMain(MainAirPollutin main) {
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
