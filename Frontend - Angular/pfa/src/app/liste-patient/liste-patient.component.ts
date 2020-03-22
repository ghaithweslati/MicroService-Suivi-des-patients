import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Observable } from "rxjs";
import { PatientService } from "../patient.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

  patients: Observable<Patient[]>;
  patient: Patient = new Patient();
  selectedValue:String;
  constructor(private patientService: PatientService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.getListePatient();
  }

  init(patient)
  {
    this.patient=patient;
  }

  ajouterPatient() {
    this.patientService.ajouterPatient(this.patient)
      .subscribe(data => this.reloadData(), error => console.log(error));
      this.patient = new Patient();
  }

  modifierPatient() {
 
    this.patientService.modifierPatient(this.patient.id,this.patient)
      .subscribe(data => this.reloadData(), error => console.log(error));
      this.patient = new Patient();
  }


  supprimerPatient(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce patient")) {
      {
        this.patientService.supprimerPatient(id)
        .subscribe(
          data => {this.reloadData()
          },
          error => alert(JSON.stringify(error)));
          this.reloadData();
      }
    } 

  }

  
}
