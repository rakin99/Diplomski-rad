package com.ftn.diplomski.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ftn.diplomski.model.Area;

public interface AreaRepository extends JpaRepository<Area,Long>{
	
	@Query(value = "SELECT * FROM weather.area\r\n" + 
			"where name_area LIKE concat('%',:searchString,'%')",	nativeQuery = true)
	Page<Area> findByName(Pageable page,@Param("searchString") String searchString);
	Area findByName(String name);
}
