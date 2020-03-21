package org.glsid.service;

import java.util.List;

import org.glsid.beans.Dossier;
import org.glsid.beans.Patient;
import org.glsid.metier.DossierMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DossierRestService {
	
	@Autowired
	private DossierMetier dossierMetier;
	
	@Autowired
	private PatientClientRestService patientClientRestService;
	

	
	@RequestMapping(value="/dossiers",method=RequestMethod.GET)
	public List<Dossier> getDossiers()
	{
		return dossierMetier.getDossiers();
	}
	
	@RequestMapping(value="/patients",method=RequestMethod.GET)
	public List<Patient> getPatients()
	{
		return patientClientRestService.getPatients();
	}
	


	




}
