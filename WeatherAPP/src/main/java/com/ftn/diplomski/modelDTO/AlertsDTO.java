package com.ftn.diplomski.modelDTO;

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

import com.ftn.diplomski.model.Alert;
import com.ftn.diplomski.model.Alerts;

public class AlertsDTO{

	private List<AlertDTO> alerts = new ArrayList<AlertDTO>();

	public AlertsDTO(List<Alert> alerts) {
		super();
		for (Alert alert : alerts) {
			this.alerts.add(new AlertDTO(alert));
		}
	}
	
	public AlertsDTO(Alerts a) {
		this(a.getAlerts());
	}
	
	public AlertsDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public List<AlertDTO> getAlerts() {
		return alerts;
	}

	public void setAlerts(List<AlertDTO> alerts) {
		this.alerts = alerts;
	}

	@Override
	public String toString() {
		return "AlertsDTO [alerts=" + alerts + "]";
	}
}