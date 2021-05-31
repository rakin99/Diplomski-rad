package com.ftn.diplomski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ftn.diplomski.model.City;

public interface CityRepository extends JpaRepository<City, Long>{

	@Query(value = "SELECT * FROM weather.city\r\n" + 
			"where id_city = :id",	nativeQuery = true)
	City findByCityId(@Param("id") Long id);
}
