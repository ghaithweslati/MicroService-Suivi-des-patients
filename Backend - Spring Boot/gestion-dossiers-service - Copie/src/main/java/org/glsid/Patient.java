package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;

@Entity(name="patient")
public class Patient implements Serializable {
	
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_pt",length=8)
	private Long id;
	
	@Column(name="nom_pt",length=8)
	private String nom;
	
	@Column(name="prenom_pt",length=8)
	private String prenom;
	
	@Column(name="adresse_pt",length=8)
	private String adresse;
	
	@Column(name="num_tel_pt",length=8)
	private Long numTelephone;

	@OneToMany(mappedBy="patient",fetch=FetchType.LAZY)
	private Collection<Dossier> dossiers;
	
	@OneToMany(mappedBy="patient",fetch=FetchType.LAZY)
	private Collection<Consultation> consultations;
	

	
	

	public Patient() {

	}


	public Patient(Long id) {
		super();
		this.id = id;
	}

	

	public Patient(Long id, String nom, String prenom, String adresse, Long numTelephone) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.adresse = adresse;
		this.numTelephone = numTelephone;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public String getAdresse() {
		return adresse;
	}



	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}



	public Long getNumTelephone() {
		return numTelephone;
	}



	public void setNumTelephone(Long numTelephone) {
		this.numTelephone = numTelephone;
	}



	@JsonIgnore
	public Collection<Dossier> getDossiers() {
		return dossiers;
	}



	public void setDossiers(Collection<Dossier> dossiers) {
		this.dossiers = dossiers;
	}


	@JsonIgnore
	public Collection<Consultation> getConsultations() {
		return consultations;
	}


	public void setConsultations(Collection<Consultation> consultations) {
		this.consultations = consultations;
	}
	
	
	
	
	
	
	
	

}