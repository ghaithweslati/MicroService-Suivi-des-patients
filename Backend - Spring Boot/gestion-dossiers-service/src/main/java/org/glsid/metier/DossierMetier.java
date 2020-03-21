package org.glsid.metier;

import java.util.Collection;
import java.util.List;
import org.glsid.beans.Dossier;
import org.glsid.dao.DossierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DossierMetier {
	
	@Autowired
	public DossierRepository dossierRepository;
	

	
	public List<Dossier> getDossiers()
	{
		return dossierRepository.findAll();
	}

}
