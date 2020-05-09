package org.glsid.beans;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="dossier")
public class Consultation implements Serializable {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="num_const")
	private Long code;
	
	@Column(name="remarque_const")
	private String remarque;
	
	@Column(name="type_const")
	private String type;
	
	@Column(name="date_const")
	private String date;
	

	@ManyToOne
	@JoinColumn(name="id_pt")
	private Patient patient;
	
	
	

	public Consultation() {
		super();
	}




	public Consultation(Long code, String remarque, String type, String date) {
		super();
		this.code = code;
		this.remarque = remarque;
		this.type = type;
		this.date = date;
	}




	public Consultation(Long code, String remarque, String type, String date, Patient patient) {
		super();
		this.code = code;
		this.remarque = remarque;
		this.type = type;
		this.date = date;
		this.patient = patient;
	}




	public Long getCode() {
		return code;
	}




	public void setCode(Long code) {
		this.code = code;
	}




	public String getRemarque() {
		return remarque;
	}




	public void setRemarque(String remarque) {
		this.remarque = remarque;
	}




	public String getType() {
		return type;
	}




	public void setType(String type) {
		this.type = type;
	}




	public String getDate() {
		return date;
	}




	public void setDate(String date) {
		this.date = date;
	}




	public Patient getPatient() {
		return patient;
	}




	public void setPatient(Patient patient) {
		this.patient = patient;
	}



	


	
	

}