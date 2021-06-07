package com.ftn.diplomski.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "areas")
public class Areas implements Serializable{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_area", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "name_area", nullable = false)
	private String name;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_coord", referencedColumnName = "id_coord")
    private Coordination coord;

	public Areas(Long id, String name, Coordination coord) {
		super();
		this.id = id;
		this.name = name;
		this.coord = coord;
	}
	
	public Areas() {
		super();
		this.id = (long) 0;
		this.name = "";
		this.coord = new Coordination();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Coordination getCoord() {
		return coord;
	}

	public void setCoord(Coordination coord) {
		this.coord = coord;
	}
}
