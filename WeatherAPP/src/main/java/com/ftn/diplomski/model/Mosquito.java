package com.ftn.diplomski.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "mosquito")
public class Mosquito implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_mosquito", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "location_key", nullable = false)
	private Long key;
	
	@Column(name = "name", nullable = false)
	private String Name;
	
	@Column(name = "id", nullable = false)
	private Long ID;
	
	@Column(name = "ascending", nullable = false)
	private boolean Ascending;
	
	@Column(name = "local_date_time", nullable = false)
	private Date LocalDateTime;
	
	@Column(name = "epoch_date_time", nullable = false)
	private Date EpochDateTime;
	
	@Column(name = "value", nullable = false)
	private double Value;
	
	@Column(name = "category", nullable = false)
	private String Category;
	
	@Column(name = "category_value", nullable = false)
	private Long CategoryValue;
	
	@Column(name = "text", nullable = false)
	private String Text;
	
	@Column(name = "mobile_link", nullable = false)
	private String MobileLink;
	
	@Column(name = "link", nullable = false)
	private String Link;

	public Mosquito(Long id, Long key, String name, Long iD2, boolean ascending, Date localDateTime, Date epochDateTime,
			double value, String category, Long categoryValue, String text, String mobileLink, String link) {
		super();
		this.id = id;
		this.key = key;
		Name = name;
		ID = iD2;
		Ascending = ascending;
		LocalDateTime = localDateTime;
		EpochDateTime = epochDateTime;
		Value = value;
		Category = category;
		CategoryValue = categoryValue;
		Text = text;
		MobileLink = mobileLink;
		Link = link;
	}

	public Mosquito() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String nAME) {
		Name = nAME;
	}

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}

	public boolean isAscending() {
		return Ascending;
	}

	public void setAscending(boolean ascending) {
		Ascending = ascending;
	}

	public Date getLocalDateTime() {
		return LocalDateTime;
	}

	public void setLocalDateTime(Date localDateTime) {
		LocalDateTime = localDateTime;
	}

	public Date getEpochDateTime() {
		return EpochDateTime;
	}

	public void setEpochDateTime(Date epochDateTime) {
		EpochDateTime = epochDateTime;
	}

	public double getValue() {
		return Value;
	}

	public void setValue(double value) {
		Value = value;
	}

	public String getCategory() {
		return Category;
	}

	public void setCategory(String category) {
		Category = category;
	}

	public Long getCategoryValue() {
		return CategoryValue;
	}

	public void setCategoryValue(Long categoryValue) {
		CategoryValue = categoryValue;
	}

	public String getText() {
		return Text;
	}

	public void setText(String text) {
		Text = text;
	}

	public String getMobileLink() {
		return MobileLink;
	}

	public void setMobileLink(String mobileLink) {
		MobileLink = mobileLink;
	}

	public String getLink() {
		return Link;
	}

	public void setLink(String link) {
		Link = link;
	}

	public Long getKey() {
		return key;
	}

	public void setKey(Long key) {
		this.key = key;
	}
}
