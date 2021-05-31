package com.ftn.diplomski.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.Coordination;
import com.ftn.diplomski.repository.CoordinationRepository;
import com.ftn.diplomski.service.CoordinationInterface;

@Service
public class CoordinationService implements CoordinationInterface {

	@Autowired
	CoordinationRepository repository;
	
	@Override
	public Coordination save(Coordination coord) {
		return repository.save(coord);
	}

	@Override
	public Coordination findById(long id) {
		return repository.getOne(id);
	}

}
