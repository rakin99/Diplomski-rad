package com.ftn.diplomski.modelDTO;

import com.ftn.diplomski.model.Area;

public class AreaDTO {

	private Long id;
	private String name;
    private CoordinationDTO coord;
	
    public AreaDTO(Long id, String name, CoordinationDTO coord) {
		super();
		this.id = id;
		this.name = name;
		this.coord = coord;
	}
    
    public AreaDTO(Area a) {
		this(a.getId(),a.getName(),new CoordinationDTO(a.getCoord()));
	}
    
    public AreaDTO() {
		super();
		this.id = (long) 0;
		this.name = "";
		this.coord = new CoordinationDTO();
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

	public CoordinationDTO getCoord() {
		return coord;
	}

	public void setCoord(CoordinationDTO coord) {
		this.coord = coord;
	}
}
