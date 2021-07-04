package com.ftn.diplomski.service;

import java.util.Date;
import java.util.List;

import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.model.Mosquito;
import com.ftn.diplomski.modelDTO.MosquitoDTO;


public interface MosquitoInterface {

	public Mosquito save(Mosquito mosquito);
	public List<MosquitoDTO> getMosquito(String areaName);
	public List<Mosquito> getMosquitoFromApi(Area area);
	public List<Mosquito> getMosquitoFromDataBase(String areaName);
	public Date maxDate();
	public void saveMosquitoForAllAreas();
}
