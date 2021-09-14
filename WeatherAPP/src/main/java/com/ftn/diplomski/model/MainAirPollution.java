package com.ftn.diplomski.model;

public class MainAirPollution {

	private int aqi;

	public MainAirPollution(int aqi) {
		super();
		this.aqi = aqi;
	}
	
	public MainAirPollution() {
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
