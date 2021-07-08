package com.ftn.diplomski.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ftn.diplomski.model.Alerts;
import com.ftn.diplomski.modelDTO.AlertsDTO;
import com.ftn.diplomski.service.AlertsInterface;
import com.ftn.diplomski.service.UserInterface;
import com.ftn.diplomski.service.Impl.AlertsService;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})
@RestController
@RequestMapping(value = "api/alerts")
public class AlertsController {

	@Autowired
	private AlertsInterface alertsService;
	
	@Autowired
	private UserInterface userService;
	
	@GetMapping()
	public ResponseEntity<AlertsDTO> getAlerts(@RequestParam String areaName,Principal principal){
		userService.changeSearchArea(principal, areaName);
		return new ResponseEntity<AlertsDTO>(alertsService.getAlerts(areaName),HttpStatus.OK);
	}
}
