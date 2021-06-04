package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.Temp;

public class TempDTO {
	
	private double min;
	private double max;
	
	public TempDTO(double min, double max) {
		super();
		this.min = min;
		this.max = max;
	}
	
	public TempDTO(Temp t) {
		this(t.getMin(),t.getMax());
	}

	public TempDTO() {
		super();
		this.min = 0;
		this.max = 0;
	}


	public double getMin() {
		return min;
	}

	public void setMin(double min) {
		this.min = min;
	}

	public double getMax() {
		return max;
	}

	public void setMax(double max) {
		this.max = max;
	}
}
