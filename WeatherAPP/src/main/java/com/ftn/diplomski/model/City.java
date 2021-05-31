package com.ftn.diplomski.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {

	@Id
	@Column(name = "id_city", nullable = false, unique = true)
	private Long id;

	@Column(name = "name_city", nullable = false)
	private String name;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_coord", referencedColumnName = "id_coord")
    private Coordination coord;

	public City() {
		super();
		this.id = (long) 0;
		this.name = "";
		this.coord = new Coordination();
	}
	
	public City(long idCity, String nameCity, Coordination coord) {
		super();
		this.id = idCity;
		this.name = nameCity;
		this.coord = coord;
	}

	public long getId() {
		return id;
	}

	public void setId(long idCity) {
		this.id = idCity;
	}

	public String getNameCity() {
		return name;
	}

	public void setNameCity(String nameCity) {
		this.name = nameCity;
	}

	public Coordination getCoord() {
		return coord;
	}

	public void setCoord(Coordination coord) {
		this.coord = coord;
	}
}
