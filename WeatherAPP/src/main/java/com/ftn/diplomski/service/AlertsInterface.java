package com.ftn.diplomski.service;

import java.io.IOException;
import java.util.Date;

import com.ftn.diplomski.model.Alerts;

public interface AlertsInterface {

	public Alerts save(Alerts alerts);
	public Alerts getAlerts(String areaName);
	public Alerts getAlertsFromApi(String areaName);
	public Alerts getAlertsFromDataBase(String areaName);
	public Date maxDate(double lat,double lon);
}
