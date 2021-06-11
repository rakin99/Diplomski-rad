package com.ftn.diplomski.modelDTO;


import java.util.Date;

import com.ftn.diplomski.model.Mosquito;

public class MosquitoDTO{
	
	private Date LocalDateTime;
	private Date EpochDateTime;
	private String Text;

	public MosquitoDTO(Date localDateTime, Date epochDateTime, String text) {
		super();
		LocalDateTime = localDateTime;
		EpochDateTime = epochDateTime;
		Text = text;
	}
	
	public MosquitoDTO(Mosquito m) {
		this(m.getLocalDateTime(), m.getEpochDateTime(), m.getText());
	}

	public MosquitoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Date getLocalDateTime() {
		return LocalDateTime;
	}

	public void setLocalDateTime(Date localDateTime) {
		LocalDateTime = localDateTime;
	}

	public Date getEpochDateTime() {
		return EpochDateTime;
	}

	public void setEpochDateTime(Date epochDateTime) {
		EpochDateTime = epochDateTime;
	}

	public String getText() {
		return Text;
	}

	public void setText(String text) {
		Text = text;
	}
}
