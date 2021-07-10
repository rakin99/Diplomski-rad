package com.ftn.diplomski.modelDTO;

import java.util.Date;

import com.ftn.diplomski.model.Alert;


public class AlertDTO{

	private Date effective_local;
	private Date expires_local;
	private String severity;
	private String title;
	private String description;
	
	public AlertDTO(Date effective_local, Date expires_local, String severity, String title, String description) {
		super();
		this.effective_local = effective_local;
		this.expires_local = expires_local;
		this.severity = severity;
		this.title = title;
		this.description = description;
	}
	
	public AlertDTO(Alert a) {
		this(a.getEffective_local(), a.getExpires_local(), a.getSeverity(), a.getTitle(), a.getDescription());
	}

	public AlertDTO() {
		super();
		this.effective_local = new Date();
		this.expires_local = new Date();
		this.severity = "";
		this.title = "";
		this.description = "";
	}

	public Date getEffective_local() {
		return effective_local;
	}

	public void setEffective_local(Date effective_local) {
		this.effective_local = effective_local;
	}

	public Date getExpires_local() {
		return expires_local;
	}

	public void setExpires_local(Date expires_local) {
		this.expires_local = expires_local;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "AlertDTO [effective_local=" + effective_local + ", expires_local=" + expires_local + ", severity="
				+ severity + ", title=" + title + ", description=" + description + "]";
	}
}
