package org.glsid.metier;

import java.util.Collection;
import java.util.List;

import org.glsid.beans.Patient;
import org.glsid.dao.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientMetier {
	
	@Autowired
	public PatientRepository patientRepository;
	

	
	
	public List<Patient> getPatients()
	{
		return patientRepository.findAll();
	}
	

	
}
