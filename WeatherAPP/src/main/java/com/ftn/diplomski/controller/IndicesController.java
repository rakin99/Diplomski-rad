package com.ftn.diplomski.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ftn.diplomski.modelDTO.MosquitoDTO;
import com.ftn.diplomski.modelDTO.PollenDTO;
import com.ftn.diplomski.service.MosquitoInterface;
import com.ftn.diplomski.service.PollenInterface;

@CrossOrigin(origins = "*", maxAge = 3600,methods = {	RequestMethod.DELETE,
		RequestMethod.GET,
		RequestMethod.PUT,
		RequestMethod.POST})
@RestController
@RequestMapping(value = "api/indices")
public class IndicesController {

	@Autowired
	private MosquitoInterface mosquitoService;
	
	@Autowired
	private PollenInterface pollenService;
	
	@GetMapping(value = "/mosquitoes")
	public ResponseEntity<List<MosquitoDTO>> getMosquitoActivityPollution(@RequestParam String areaName){
		return new ResponseEntity<List<MosquitoDTO>>(mosquitoService.getMosquito(areaName),HttpStatus.OK);
	}
	
	@GetMapping(value = "/pollen")
	public ResponseEntity<List<PollenDTO>> getIndexPollenPollution(@RequestParam String areaName){
		return new ResponseEntity<List<PollenDTO>>(pollenService.getPollen(areaName),HttpStatus.OK);
	}
}
