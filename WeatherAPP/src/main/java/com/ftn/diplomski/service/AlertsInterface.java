package com.ftn.diplomski.service;
import java.util.Date;

import com.ftn.diplomski.model.Alerts;
import com.ftn.diplomski.modelDTO.AlertsDTO;

public interface AlertsInterface {

	public Alerts save(Alerts alerts);
	public AlertsDTO getAlerts(String areaName);
	public Alerts getAlertsFromApi(String areaName);
	public Alerts getAlertsFromDataBase(String areaName);
	public Date maxDate(double lat,double lon);
}
