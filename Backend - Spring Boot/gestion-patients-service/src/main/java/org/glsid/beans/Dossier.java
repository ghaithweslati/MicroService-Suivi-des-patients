package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="dossier")
public class Dossier implements Serializable {
	
	@Id
	@Column(name="num_doss",length=8)
	private Long code;
	
	@Column(name="nom_doss",length=8)
	private String nom;
	
	@Column(name="type_doss",length=8)
	private String type;
	
	@Column(name="date_doss",length=8)
	private String date_doss;
	

	@ManyToOne
	@JoinColumn(name="id_pt")
	private Patient patient;
	
	
	

	public Dossier() {
		super();
	}



	public Dossier(Long code, String nom, String type, String date_doss) {
		super();
		this.code = code;
		this.nom = nom;
		this.type = type;
		this.date_doss = date_doss;
	}





	public Long getCode() {
		return code;
	}



	public void setCode(Long code) {
		this.code = code;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}



	public String getDate_doss() {
		return date_doss;
	}



	public void setDate_doss(String date_doss) {
		this.date_doss = date_doss;
	}




}