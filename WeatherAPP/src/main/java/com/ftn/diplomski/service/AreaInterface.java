package com.ftn.diplomski.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.modelDTO.AreaDTO;

public interface AreaInterface {

	public List<AreaDTO> getAreas(Pageable page,String searchString);
	public Area findByName(String name);
	public List<Area> findAll();
}
