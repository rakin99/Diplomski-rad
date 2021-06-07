package com.ftn.diplomski.model;

import java.util.ArrayList;
import java.util.List;

public class AirPollution {

	private Coordination coord;
	private List<AirInformation> list = new ArrayList<AirInformation>();
	
	public AirPollution(Coordination coord, List<AirInformation> list) {
		super();
		this.coord = coord;
		this.list = list;
	}

	public AirPollution() {
		super();
		this.coord = new Coordination();
	}

	public Coordination getCoord() {
		return coord;
	}

	public void setCoord(Coordination coord) {
		this.coord = coord;
	}

	public List<AirInformation> getList() {
		return list;
	}

	public void setList(List<AirInformation> list) {
		this.list = list;
	}
}
