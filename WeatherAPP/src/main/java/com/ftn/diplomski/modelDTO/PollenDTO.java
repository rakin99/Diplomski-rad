package com.ftn.diplomski.modelDTO;

import java.util.Date;

import com.ftn.diplomski.model.Pollen;

public class PollenDTO{

	private Long ID;
	private Date LocalDateTime;
	private Date EpochDateTime;
	private String Text;

	public PollenDTO(Long iD,Date localDateTime, Date epochDateTime, String text) {
		super();
		ID=iD;
		LocalDateTime = localDateTime;
		EpochDateTime = epochDateTime;
		Text = text;
	}
	
	public PollenDTO(Pollen p) {
		this(p.getID(),p.getLocalDateTime(), p.getEpochDateTime(), p.getText());
	}

	public PollenDTO() {
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

	public Long getID() {
		return ID;
	}

	public void setID(Long iD) {
		ID = iD;
	}
}
