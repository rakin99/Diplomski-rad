package com.ftn.diplomski.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.Area;
import com.ftn.diplomski.modelDTO.AreaDTO;
import com.ftn.diplomski.repository.AreaRepository;
import com.ftn.diplomski.service.AreaInterface;

@Service
public class AreaService implements AreaInterface{

	@Autowired
	AreaRepository repository;
	
	@Override
	public List<AreaDTO> getAreas(Pageable page,String searchString) {
		System.out.println("\nGet areas: \n"+searchString);
		Page<Area> areas = repository.findByName(page,searchString);
		List<AreaDTO> dtos = new ArrayList<AreaDTO>();
		for (Area area : areas) {
			System.out.println("Name: "+area.getName());
			dtos.add(new AreaDTO(area));
		}
		return dtos;
	}

	@Override
	public Area findByName(String name) {
		return repository.findByName(name);
	}

}
