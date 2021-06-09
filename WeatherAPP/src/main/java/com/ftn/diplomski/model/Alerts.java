package com.ftn.diplomski.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "alerts")
public class Alerts implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_alerts", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "date", nullable = false, unique = true)
	private Date date;
	
	@Column(name = "country_code", nullable = false, unique = false)
	private String country_code;
	
	@Column(name = "lon", nullable = false, unique = false)
	private double lon;
	
	@Column(name = "timezone", nullable = false, unique = false)
	private String timezone;
	
	@Column(name = "lat", nullable = false, unique = false)
	private double lat;
	
	@Column(name = "city_name", nullable = false, unique = false)
	private String city_name;
	
	@Column(name = "state_code", nullable = false, unique = false)
	private String state_code;
	
	@OneToMany(cascade={CascadeType.ALL}, fetch=FetchType.LAZY, mappedBy="alerts")
	private List<Alert> alerts = new ArrayList<Alert>();

	public Alerts(Long id, String country_code, double lon, String timezone, double lat, String city_name,
			String state_code, List<Alert> alerts,Date date) {
		super();
		this.id = id;
		this.country_code = country_code;
		this.lon = lon;
		this.timezone = timezone;
		this.lat = lat;
		this.city_name = city_name;
		this.state_code = state_code;
		this.alerts = alerts;
		this.date = date;
	}
	
	public Alerts() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountry_code() {
		return country_code;
	}

	public void setCountry_code(String country_code) {
		this.country_code = country_code;
	}

	public double getLon() {
		return lon;
	}

	public void setLon(double lon) {
		this.lon = lon;
	}

	public String getTimezone() {
		return timezone;
	}

	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	public String getState_code() {
		return state_code;
	}

	public void setState_code(String state_code) {
		this.state_code = state_code;
	}

	public List<Alert> getAlerts() {
		return alerts;
	}

	public void setAlerts(List<Alert> alerts) {
		this.alerts = alerts;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public void setAlertsMemberAlerts() {
		for (Alert alert : this.alerts) {
			alert.setAlerts(this);
		}
	}

	@Override
	public String toString() {
		return "AlertsDTO [id=" + id + ", date=" + date + ", country_code=" + country_code + ", lon=" + lon + ", timezone="
				+ timezone + ", lat=" + lat + ", city_name=" + city_name + ", state_code=" + state_code + ", alerts="
				+ alerts + "]";
	}
	
	
}