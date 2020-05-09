package org.glsid.service;

import java.util.List;

import javax.validation.Valid;

import org.glsid.beans.Consultation;
import org.glsid.beans.Dossier;
import org.glsid.beans.Patient;
import org.glsid.metier.ConsultationMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ConsultationRestService {
	
	@Autowired
	private ConsultationMetier consultationMetier;
	
	@Autowired
	private PatientClientRestService patientClientRestService;
	


	@RequestMapping(value="/consultations",method=RequestMethod.GET)
	public List<Consultation> getConsultations()
	{
		return consultationMetier.getConsultations();
	}
	
	@RequestMapping(value="/patients",method=RequestMethod.GET)
	public List<Patient> getPatients()
	{
		return patientClientRestService.getPatients();
	}
	
	@DeleteMapping("/consultations/{code}")
	public  boolean supprimerConsultation(@PathVariable(value = "code")Long code) 
	{
		 return consultationMetier.supprimerConsultation(code);
	}
	
	@RequestMapping(value="/consultations",method=RequestMethod.POST)
	public Consultation ajouterConsultation(@RequestBody Consultation consultation) {
		return consultationMetier.ajouterConsultation(consultation);
	}
	
	@RequestMapping(value="/consultations/{code}",method=RequestMethod.PUT)
	public Consultation modifierConsultation(@PathVariable(value = "code") Long code,
			@Valid @RequestBody Consultation consultation )
	{
		return consultationMetier.modifierConsultation(code,consultation);
	}


	




}
