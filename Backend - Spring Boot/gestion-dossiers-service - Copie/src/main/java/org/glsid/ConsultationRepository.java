package org.glsid.dao;

import org.glsid.beans.Consultation;
import org.glsid.beans.Dossier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;



public interface ConsultationRepository  extends JpaRepository<Consultation,Long>{

}
