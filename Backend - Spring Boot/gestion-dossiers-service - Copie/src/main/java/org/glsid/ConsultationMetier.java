package org.glsid.metier;

import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.glsid.beans.Consultation;
import org.glsid.beans.Dossier;
import org.glsid.beans.Patient;
import org.glsid.dao.ConsultationRepository;
import org.glsid.dao.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ConsultationMetier {
	
	@Autowired
	public ConsultationRepository consultationRepository;
	
	
	@Autowired
	public PatientRepository patientRepository;
	
	
	public List<Consultation> getConsultations()
	{
		return consultationRepository.findAll();
	}

	
	public boolean supprimerConsultation(Long code)
	{
		Consultation consultation=consultationRepository.findById(code).orElse(null);
		consultationRepository.delete(consultation);
		return true;
	}
	
	public Consultation ajouterConsultation(Consultation consultation)
	{
		Long id = consultation.getPatient().getId();
		Patient p = patientRepository.findById(id).orElse(null);
		consultation.setPatient(p);
		return consultationRepository.save(consultation);
	}
	
	public Consultation modifierConsultation(Long code,Consultation nouvConsultation)
	{
		Consultation consultation=consultationRepository.findById(code).orElse(null);
		Patient p = patientRepository.findById(nouvConsultation.getPatient().getId()).orElse(null);
		consultation.setPatient(p);
		consultation.setDate(nouvConsultation.getDate());
		consultation.setRemarque(nouvConsultation.getRemarque());
		consultation.setType(nouvConsultation.getType());
		return consultationRepository.save(consultation);
	}
	
	
}
