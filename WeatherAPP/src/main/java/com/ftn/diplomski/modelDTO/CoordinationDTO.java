package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.Coordination;

public class CoordinationDTO{

	private long id;
	private double lon;
	private double lat;
	
	public CoordinationDTO() {
		super();
		this.id = 0;
		this.lon = 0;
		this.lat = 0;
	}
	
	public CoordinationDTO(long id,double lon, double lat) {
		super();
		this.id = id;
		this.lon = lon;
		this.lat = lat;
	}
	
	public CoordinationDTO(Coordination coord) {
		this(coord.getId(),coord.getLon(),coord.getLat());
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getLon() {
		return lon;
	}
	public void setLon(double lon) {
		this.lon = lon;
	}
	
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
}
