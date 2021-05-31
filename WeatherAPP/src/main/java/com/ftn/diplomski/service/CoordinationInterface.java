package com.ftn.diplomski.service;

import com.ftn.diplomski.model.Coordination;

public interface CoordinationInterface {

	public Coordination save(Coordination coord);
	public Coordination findById(long id);
}
