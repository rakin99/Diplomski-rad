package com.ftn.diplomski.configuration;


import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import com.ftn.diplomski.service.AlertsInterface;
import com.ftn.diplomski.service.MailInterface;
import com.ftn.diplomski.service.MosquitoInterface;
import com.ftn.diplomski.service.PollenInterface;

@Configuration
@EnableScheduling
public class AutoRequestConfiguration {

	@Autowired
	private AlertsInterface alertsService;
	
	@Autowired
	private MosquitoInterface mosquitoService;
	
	@Autowired
	private PollenInterface pollenService;
	
	@Autowired
	private MailInterface mailService;
	
	@Scheduled(cron = "0 15 12 * * ?")
	public void autoRequestForApis() {
		alertsService.saveAlertsForAllAreas();
		mosquitoService.saveMosquitoForAllAreas();
		pollenService.savePollenForAllAreas();
		mailService.preapareMail();
	}

//    @PostConstruct
//    public void initRequestForApis() {
//    	alertsService.saveAlertsForAllAreas();
//		mosquitoService.saveMosquitoForAllAreas();
//		pollenService.savePollenForAllAreas();
//		mailService.preapareMail();
//    }
}
