package com.ftn.diplomski.service.Impl;

import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ftn.diplomski.model.Alerts;
import com.ftn.diplomski.model.User;
import com.ftn.diplomski.service.AlertsInterface;
import com.ftn.diplomski.service.MailInterface;
import com.ftn.diplomski.service.UserInterface;

@Service
public class MailService implements MailInterface {

	@Autowired
	private AlertsInterface alertsService;
	
	@Autowired
	private UserInterface userService;
	
	@Override
	public void preapareMail() {
		List<User> users = userService.findAll();
		for (User user : users) {
			if(user.isAlerts()) {
				Alerts alerts = alertsService.getAlertsFromDataBase(user.getArea());
				if(alerts.getAlerts().size()>0) {
					int index = alerts.getAlerts().get(0).getDescription().indexOf("(sr):")+6;
					String desc = alerts.getAlerts().get(0).getDescription().substring(index);
					System.out.println("\nDes: "+desc);
					sendMail(user.getUsername(), desc);
				}
			}
		}
	}

	@SuppressWarnings("deprecation")
	@Override
	public void sendMail(String recipients, String alerts) {
		
		final String username = "vremenska.upozorenja@gmail.com";//change accordingly
	    final String password = "qbtlmyrekrxmfjwl";//fonypknjzvxfbfcg qbtlmyrekrxmfjwl

	      // Assuming you are sending email through relay.jangosmtp.net
	//025793117|qacuhygtjzorzokq
	        Properties props = new Properties();
	        props.put("mail.smtp.auth", "true");
	        //props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.smtp.host", "smtp.gmail.com");
	        props.put("mail.smtp.port", "587");
	        props.put("mail.imaps.ssl.trust", "*");   
	        props.put("mail.smtp.starttls.enable", "true");

	      // Get the Session object.
	      Session session = Session.getInstance(props,
	         new javax.mail.Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	               return new PasswordAuthentication(username, password);
	    }
	         });

	      try {
	    // Create a default MimeMessage object.
	    Message message = new MimeMessage(session);
	 
	    // Set From: header field of the header.
	    message.setFrom(new InternetAddress(username));
	 

	        // Set To: header field of the header.
        message.setRecipients(Message.RecipientType.TO,
                   InternetAddress.parse(recipients));
	 
	    // Set Subject: header field
        Date date = new Date();
	    message.setSubject("Vremenska upozorenja za "+date.getDate()+"."+(date.getMonth()+1)+"."+(date.getYear()+1900)+".");
	    
	    message.setSentDate(new Date());
	    
	    // Now set the actual message
	    message.setText(alerts);

	    Transport.send(message);

	    System.out.println("\n\nSent message successfully....");

	      } catch (MessagingException e) {
	         throw new RuntimeException(e);
	      }
	}

}
