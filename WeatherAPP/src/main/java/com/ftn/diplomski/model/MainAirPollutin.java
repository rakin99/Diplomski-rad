package com.ftn.diplomski.model;

public class MainAirPollutin {

	private int aqi;

	public MainAirPollutin(int aqi) {
		super();
		this.aqi = aqi;
	}
	
	public MainAirPollutin() {
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
