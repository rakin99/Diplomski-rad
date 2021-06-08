package com.ftn.diplomski.repository;
import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ftn.diplomski.model.Alerts;

public interface AlertsRepository extends JpaRepository<Alerts,Long>{

	@Query(value = "SELECT max(date) FROM weather.alerts as a\r\n" + 
			"where a.lat = round(:lat,2) and a.lon = round(:lon,2)",nativeQuery = true)
	Date maxDate(@Param("lat") double lat, @Param("lon") double lon);
	
	@Query(value = "SELECT * FROM weather.alerts\r\n" + 
			"where lat = round(:lat,2) and lon = round(:lon,2) and day(date)=:day and month(date)=:month and year(date)=:year",nativeQuery = true)
	Alerts getAlertsFromDataBase(@Param("lat") double lat, @Param("lon") double lon,@Param("day")long day,@Param("month")long month,@Param("year")long year);
}
