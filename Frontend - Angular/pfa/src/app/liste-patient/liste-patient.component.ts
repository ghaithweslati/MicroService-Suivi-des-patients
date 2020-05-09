import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Observable } from "rxjs";
import { PatientService } from "../patient.service";
import { Router } from '@angular/router';
import { ToasterService } from '../toaster-service.service';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

  patients: Observable<Patient[]>;
  patient: Patient = new Patient();
  selectedValue:String;
  toasterService:ToasterService;
  constructor(private patientService: PatientService,public myapp: AppComponent,
    private router: Router) {
      myapp.titre="Patients";
    }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.getListePatient();
  }

  init(patient)
  {
    this.patient=Object.assign({}, patient);

  }

  ajouterPatient() {
    this.patientService.ajouterPatient(this.patient)
      .subscribe(data => {
        this.reloadData();
        this.myapp.Success("Patient ajouté avec succès")
      }, error => this.myapp.Echec("Ajout du patient échoué"));
      this.patient = new Patient();
  }

  modifierPatient() {
 
    this.patientService.modifierPatient(this.patient.id,this.patient)
      .subscribe(data => { 
        this.reloadData();
        this.myapp.Success("Patient modifié avec succès");
      }
      , error =>  this.myapp.Echec("Modification du patient échoué"));
      this.patient = new Patient();
  }


  supprimerPatient(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce patient")) {
      {
        this.patientService.supprimerPatient(id)
        .subscribe(
          data => {this.reloadData();
            this.myapp.Success("Patient supprimé avec succès");
          },
          error => this.myapp.Echec("Suppression du patient échoué"));
          this.reloadData();
      }
    } 

  }

  
}
