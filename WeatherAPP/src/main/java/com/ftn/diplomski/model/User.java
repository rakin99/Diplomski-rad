package com.ftn.diplomski.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "users")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	@Column(name = "username", unique = true, nullable = false)
	private String username;
	
	@Column(name = "password", unique = false, nullable = false)
	private String password;
	
	@Column(name = "role", unique = false, nullable = false)
	private String role;
	
	@Column(name = "alerts", unique = false, nullable = false)
	private boolean alerts;
	
	@Column(name = "area", unique = false, nullable = true)
	private String area;
	
	@Column(name = "last_search_area", unique = false, nullable = true)
	private String lastSearchArea;
	
	@Column(name = "last_search_place", unique = false, nullable = true)
	private String lastSearchPlace;

	public User(Long id, String username, String password, String role, boolean alerts, String area, String lastSearchArea,
			String lastSearchPlace) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.role = role;
		this.alerts = alerts;
		this.area = area;
		this.lastSearchArea = lastSearchArea;
		this.lastSearchPlace = lastSearchPlace;
	}

	public User() {
		super();
		this.username = "";
		this.password = "";
		this.role = "";
		this.alerts = false;
		this.area = "";
		this.lastSearchArea = "";
		this.lastSearchPlace = "";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isAlerts() {
		return alerts;
	}

	public void setAlerts(boolean alerts) {
		this.alerts = alerts;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getLastSearchArea() {
		return lastSearchArea;
	}

	public void setLastSearchArea(String lastSearchArea) {
		this.lastSearchArea = lastSearchArea;
	}

	public String getLastSearchPlace() {
		return lastSearchPlace;
	}

	public void setLastSearchPlace(String lastSearchPlace) {
		this.lastSearchPlace = lastSearchPlace;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
