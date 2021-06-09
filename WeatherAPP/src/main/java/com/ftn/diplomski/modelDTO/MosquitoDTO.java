package com.ftn.diplomski.modelDTO;


import java.util.Date;

import javax.persistence.Column;

import com.ftn.diplomski.model.Mosquito;

public class MosquitoDTO{
	
	@Column(name = "local_date_time", nullable = false)
	private Date LocalDateTime;
	
	@Column(name = "epoch_date_time", nullable = false)
	private Date EpochDateTime;
	
	@Column(name = "text", nullable = false)
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
