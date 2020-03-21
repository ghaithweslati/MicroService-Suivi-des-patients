package org.glsid.service;

import java.util.Collection;
import java.util.List;

import org.glsid.beans.Dossier;
import org.glsid.beans.Patient;
import org.glsid.metier.PatientMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientRestService {

@Autowired
private PatientMetier patientMetier;

@Autowired
private DossierClientRestService dossierClientRestService;




@RequestMapping(value="/patients",method=RequestMethod.GET)
public  List<Patient> getPatients() {
	return patientMetier.getPatients();
}


@RequestMapping(value="/dossiers",method=RequestMethod.GET)
public List<Dossier> getDossiers()
{
	return dossierClientRestService.getDossiers();
}


	
}
