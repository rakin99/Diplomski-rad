package com.ftn.diplomski.service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.Alert;
import com.ftn.diplomski.repository.AlertRepository;
import com.ftn.diplomski.service.AlertInterface;

@Service
public class AlertService implements AlertInterface{

	@Autowired
	AlertRepository repository;
	
	@Override
	public Long maxIdAlert() {
		return repository.maxIdAlert();
	}

	@Override
	public Alert save(Alert alert) {
		// TODO Auto-generated method stub
		return repository.save(alert);
	}

	
}
