package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.AirInformation;

public class AirInformationDTO {

	private MainAirPollutinDTO main;
	private ComponentsDTO components;
	private Long dt;
	
	public AirInformationDTO(MainAirPollutinDTO main, ComponentsDTO components, Long dt) {
		super();
		this.main = main;
		this.components = components;
		this.dt = dt;
	}
	
	public AirInformationDTO(AirInformation a) {
		this(new MainAirPollutinDTO(a.getMain()),new ComponentsDTO(a.getComponents()),a.getDt());
	}
	
	public AirInformationDTO() {
		super();
		this.main = new MainAirPollutinDTO();
		this.components = new ComponentsDTO();
		this.dt = (long) 0;
	}

	public MainAirPollutinDTO getMain() {
		return main;
	}

	public void setMain(MainAirPollutinDTO main) {
		this.main = main;
	}

	public ComponentsDTO getComponents() {
		return components;
	}

	public void setComponents(ComponentsDTO components) {
		this.components = components;
	}

	public Long getDt() {
		return dt;
	}

	public void setDt(Long dt) {
		this.dt = dt;
	}
}
