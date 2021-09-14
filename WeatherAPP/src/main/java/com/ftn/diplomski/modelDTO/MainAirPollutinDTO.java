package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.MainAirPollution;

public class MainAirPollutinDTO {

	private int aqi;

	public MainAirPollutinDTO(int aqi) {
		super();
		this.aqi = aqi;
	}
	
	public MainAirPollutinDTO(MainAirPollution ma) {
		this(ma.getAqi());
	}
	
	public MainAirPollutinDTO() {
		super();
		this.aqi = 0;
	}

	public int getAqi() {
		return aqi;
	}

	public void setAqi(int aqi) {
		this.aqi = aqi;
	}
}
