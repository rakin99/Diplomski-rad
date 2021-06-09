package com.ftn.diplomski.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@SuppressWarnings("serial")
@Entity
@Table(name = "alert")
public class Alert implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_alert", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "ends_utc", nullable = false, unique = false)
	private Date ends_utc;
	
	@Column(name = "effective_local", nullable = false, unique = false)
	private Date effective_local;
	
	@Column(name = "onset_utc", nullable = false, unique = false)
	private Date onset_utc;
	
	@Column(name = "expires_local", nullable = false, unique = false)
	private Date expires_local;
	
	@Column(name = "expires_utc", nullable = false, unique = false)
	private Date expires_utc;
	
	@Column(name = "ends_local", nullable = false, unique = false)
	private Date ends_local;
	
	@Column(name = "uri", nullable = false, unique = false)
	private String uri;
	
	@Column(name = "onset_local", nullable = false, unique = false)
	private Date onset_local;
	
	@Column(name = "effective_utc", nullable = false, unique = false)
	private Date effective_utc;
	
	@Column(name = "severity", nullable = false, unique = false)
	private String severity;
	
	@Column(name = "title", nullable = false, unique = false)
	private String title;
	
	@Column(name = "description", nullable = false, unique = false)
	private String description;
	
	@ManyToOne
	@JoinColumn(name="id_alerts", referencedColumnName="id_alerts", nullable=false)
	private Alerts alerts;

	public Alert(Long id, Date ends_utc, Date effective_local, Date onset_utc,
			Date expires_local, Date expires_utc, Date ends_local, String uri, Date onset_local, Date effective_utc,
			String severity, String title, String description) {
		super();
		this.id = id;
		this.ends_utc = ends_utc;
		this.effective_local = effective_local;
		this.onset_utc = onset_utc;
		this.expires_local = expires_local;
		this.expires_utc = expires_utc;
		this.ends_local = ends_local;
		this.uri = uri;
		this.onset_local = onset_local;
		this.effective_utc = effective_utc;
		this.severity = severity;
		this.title = title;
		this.description = description;
	}

	public Alert() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getEnds_utc() {
		return ends_utc;
	}

	public void setEnds_utc(Date ends_utc) {
		this.ends_utc = ends_utc;
	}

	public Date getEffective_local() {
		return effective_local;
	}

	public void setEffective_local(Date effective_local) {
		this.effective_local = effective_local;
	}

	public Date getOnset_utc() {
		return onset_utc;
	}

	public void setOnset_utc(Date onset_utc) {
		this.onset_utc = onset_utc;
	}

	public Date getExpires_local() {
		return expires_local;
	}

	public void setExpires_local(Date expires_local) {
		this.expires_local = expires_local;
	}

	public Date getExpires_utc() {
		return expires_utc;
	}

	public void setExpires_utc(Date expires_utc) {
		this.expires_utc = expires_utc;
	}

	public Date getEnds_local() {
		return ends_local;
	}

	public void setEnds_local(Date ends_local) {
		this.ends_local = ends_local;
	}

	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public Date getOnset_local() {
		return onset_local;
	}

	public void setOnset_local(Date onset_local) {
		this.onset_local = onset_local;
	}

	public Date getEffective_utc() {
		return effective_utc;
	}

	public void setEffective_utc(Date effective_utc) {
		this.effective_utc = effective_utc;
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

	public Alerts getAlerts() {
		return alerts;
	}

	public void setAlerts(Alerts alerts) {
		this.alerts = alerts;
	}

	@Override
	public String toString() {
		return "AlertDTO [id=" + id + ", ends_utc=" + ends_utc + ", effective_local=" + effective_local + ", onset_utc="
				+ onset_utc + ", expires_local=" + expires_local + ", expires_utc=" + expires_utc + ", ends_local="
				+ ends_local + ", uri=" + uri + ", onset_local=" + onset_local + ", effective_utc=" + effective_utc
				+ ", severity=" + severity + ", title=" + title + ", description=" + description + "]";
	}
	
	
}
