package com.ftn.diplomski.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "coordination")
public class Coordination implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_coord", nullable = false, unique = true)
	private long id;
	
	@Column(name = "lon_coord", nullable = false)
	private double lon;
	
	@Column(name = "lat_coord", nullable = false)
	private double lat;
	
	@OneToOne(mappedBy = "coord")
    private City city;
	
	@OneToOne(mappedBy = "coord")
    private Areas areas;
	
	public Coordination() {
		super();
		this.id = 0;
		this.lon = 0;
		this.lat = 0;
	}
	
	public Coordination(double lon, double lat) {
		super();
		this.id = 0;
		this.lon = lon;
		this.lat = lat;
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
