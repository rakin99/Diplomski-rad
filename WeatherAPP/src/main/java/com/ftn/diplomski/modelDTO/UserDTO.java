package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.List;

import com.ftn.diplomski.model.User;

public class UserDTO {

	private Long id;
	private String username;
	private String password;
	private String role;
	private boolean alerts;
	private String area;
	private String lastSearchArea;
	private String lastSearchPlace;
	
	public UserDTO() {
		super();
		this.id = (long) 0;
		this.username = "";
		this.password = "";
		this.role = "";
		this.alerts = false;
		this.area = "";
		this.lastSearchArea = "";
		this.lastSearchPlace = "";
	}
	
	public UserDTO(Long id, String username, String password, String role, boolean alerts, String area,
			String lastSearchArea, String lastSearchPlace) {
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



	public UserDTO(User user) {
		this(user.getId(),user.getUsername(),user.getPassword(),user.getRole(),user.isAlerts(),user.getArea(),user.getLastSearchArea(),user.getLastSearchPlace());
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

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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
}
