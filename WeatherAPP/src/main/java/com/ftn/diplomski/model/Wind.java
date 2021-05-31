package com.ftn.diplomski.model;

public class Wind {

	private double speed;
	private long deg;
	
	public Wind() {
		super();
		this.speed = 0;
		this.deg = 0;
	}
	
	public Wind(double speed, long deg) {
		super();
		this.speed = speed;
		this.deg = deg;
	}
	
	public double getSpeed() {
		return speed;
	}
	public void setSpeed(double speed) {
		this.speed = speed;
	}
	
	public long getDeg() {
		return deg;
	}
	public void setDeg(long deg) {
		this.deg = deg;
	}
}
