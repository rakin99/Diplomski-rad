package com.ftn.diplomski.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ftn.diplomski.model.Alert;

public interface AlertRepository extends JpaRepository<Alert, Long> {

	@Query(value = "SELECT max(id_alert) FROM weather.alert",nativeQuery = true)
	public Long maxIdAlert();
}
