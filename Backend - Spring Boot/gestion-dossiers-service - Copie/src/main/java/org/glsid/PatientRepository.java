package org.glsid.dao;

import org.glsid.beans.Patient;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PatientRepository  extends JpaRepository<Patient,Long>{

}
