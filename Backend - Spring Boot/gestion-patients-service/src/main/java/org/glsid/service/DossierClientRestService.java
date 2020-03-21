package org.glsid.service;

import java.util.List;

import org.glsid.beans.Dossier;
import org.glsid.beans.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@FeignClient(name="gestion-dossiers-service")
public interface DossierClientRestService {
	
	
	@RequestMapping(value="/dossiers",method=RequestMethod.GET)
	public List<Dossier> getDossiers();



}
