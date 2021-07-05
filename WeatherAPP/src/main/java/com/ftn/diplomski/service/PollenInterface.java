package com.ftn.diplomski.service;

import java.util.Date;
import java.util.List;

import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.model.Pollen;
import com.ftn.diplomski.modelDTO.PollenDTO;


public interface PollenInterface {

	public Pollen save(Pollen pollen);
	public List<PollenDTO> getPollen(String areaName);
	public List<Pollen> getPollenFromApi(Area area);
	public List<Pollen> getPollenFromDataBase(String areaName);
	public Date maxDate();
	public void savePollenForAllAreas();
}
