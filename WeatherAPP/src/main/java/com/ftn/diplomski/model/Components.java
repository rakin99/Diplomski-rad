package com.ftn.diplomski.model;

public class Components {

	private double co;
	private double no;
	private double no2;
	private double o3;
	private double so2;
	private double pm2_5;
	private double pm10;
	private double nh3;
	
	public Components(double co, double no, double no2, double o3, double so2, double pm2_5, double pm10, double nh3) {
		super();
		this.co = co;
		this.no = no;
		this.no2 = no2;
		this.o3 = o3;
		this.so2 = so2;
		this.pm2_5 = pm2_5;
		this.pm10 = pm10;
		this.nh3 = nh3;
	}

	public Components() {
		super();
		this.co = 0;
		this.no = 0;
		this.no2 = 0;
		this.o3 = 0;
		this.so2 = 0;
		this.pm2_5 = 0;
		this.pm10 = 0;
		this.nh3 = 0;
	}

	public double getCo() {
		return co;
	}

	public void setCo(double co) {
		this.co = co;
	}

	public double getNo() {
		return no;
	}

	public void setNo(double no) {
		this.no = no;
	}

	public double getNo2() {
		return no2;
	}

	public void setNo2(double no2) {
		this.no2 = no2;
	}

	public double getO3() {
		return o3;
	}

	public void setO3(double o3) {
		this.o3 = o3;
	}

	public double getSo2() {
		return so2;
	}

	public void setSo2(double so2) {
		this.so2 = so2;
	}

	public double getPm2_5() {
		return pm2_5;
	}

	public void setPm2_5(double pm2_5) {
		this.pm2_5 = pm2_5;
	}

	public double getPm10() {
		return pm10;
	}

	public void setPm10(double pm10) {
		this.pm10 = pm10;
	}

	public double getNh3() {
		return nh3;
	}

	public void setNh3(double nh3) {
		this.nh3 = nh3;
	}
}
