package com.ftn.diplomski.modelDTO;

import java.util.ArrayList;
import java.util.List;

import com.ftn.diplomski.model.AirInformation;
import com.ftn.diplomski.model.AirPollution;
import com.ftn.diplomski.model.Coordination;

public class AirPollutionDTO {
	
	private String cityName;
	private List<AirInformationDTO> list = new ArrayList<AirInformationDTO>();
	
	public AirPollutionDTO(String cityName, List<AirInformation> list) {
		super();
		this.cityName = cityName;
		for (AirInformation airInformation : list) {
			this.list.add(new AirInformationDTO(airInformation));
		}
	}
	
	public AirPollutionDTO(String cityName, AirPollution ap) {
		this(cityName,ap.getList());
	}

	public AirPollutionDTO() {
		super();
		this.cityName = "";
	}

	public String getCityName() {
		return cityName;
	}

	public void setCityName(String cityName) {
		this.cityName = cityName;
	}

	public List<AirInformationDTO> getList() {
		return list;
	}

	public void setList(List<AirInformationDTO> list) {
		this.list = list;
	}
}
