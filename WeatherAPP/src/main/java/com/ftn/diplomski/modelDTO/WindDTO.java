package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.Wind;

public class WindDTO {

	private double speed;
	
	public WindDTO() {
		super();
		this.speed = 0;
	}
	
	public WindDTO(double speed) {
		super();
		this.speed = speed;
	}
	
	public WindDTO(Wind w) {
		this(w.getSpeed());
	}
	
	public double getSpeed() {
		return speed;
	}
	public void setSpeed(double speed) {
		this.speed = speed;
	}
}
