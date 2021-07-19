package com.ftn.diplomski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ftn.diplomski.model.City;

public interface CityRepository extends JpaRepository<City, Long>{

	@Query(value = "SELECT * FROM weather.city\r\n" + 
			"where name_city LIKE concat('%',:searchPlace,'%')",nativeQuery = true)
	City findByName(@Param("searchPlace") String searchPlace);
}
