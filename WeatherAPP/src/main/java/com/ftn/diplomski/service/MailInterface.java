package com.ftn.diplomski.service;

public interface MailInterface {
	public void preapareMail();
	public void sendMail(String recipients,String alerts);
	public void registrationConfirm(String recipients, String userPassword);
}
