package com.ftn.diplomski.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ftn.diplomski.modelDTO.AreaDTO;
import com.ftn.diplomski.service.AreaInterface;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})
@RestController
@RequestMapping(value = "api/area")
public class AreaController {

	@Autowired
	private AreaInterface areaService;
	
	@GetMapping()
	public ResponseEntity<List<AreaDTO>> getCurrentAirPollution(Pageable page,@RequestParam String searchString){
		return new ResponseEntity<List<AreaDTO>>(areaService.getAreas(page, searchString),HttpStatus.OK);
	}
}
