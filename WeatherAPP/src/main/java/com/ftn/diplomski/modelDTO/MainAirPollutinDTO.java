package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.MainAirPollutin;

public class MainAirPollutinDTO {

	private int aqi;

	public MainAirPollutinDTO(int aqi) {
		super();
		this.aqi = aqi;
	}
	
	public MainAirPollutinDTO(MainAirPollutin ma) {
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
