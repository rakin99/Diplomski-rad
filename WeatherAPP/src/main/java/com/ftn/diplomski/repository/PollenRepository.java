package com.ftn.diplomski.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.ftn.diplomski.model.Pollen;

public interface PollenRepository extends JpaRepository<Pollen, Long>{

	@Query(value = "SELECT max(local_date_time) FROM weather.pollen\r\n",nativeQuery = true)
	Date maxDate();

	@Query(value = "SELECT * FROM weather.pollen\r\n" + 
			"where location_key=:key and day(local_date_time)=:day and month(local_date_time)=:month and year(local_date_time)=:year",nativeQuery = true)
	List<Pollen> getPollenFromDataBase(@Param("key") Long key,@Param("day")long day,@Param("month")long month,@Param("year")long year);
}
