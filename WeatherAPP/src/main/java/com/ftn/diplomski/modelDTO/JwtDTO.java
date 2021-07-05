package com.ftn.diplomski.modelDTO;

public class JwtDTO {

	private String value;

	public JwtDTO(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
