import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  patient: Patient = new Patient();
  constructor(private patientService: PatientService,public myapp: AppComponent) {
    myapp.titre="Profil";
   }

  ngOnInit(): void {
    this.patient=JSON.parse(localStorage.getItem('patient'));
  }

    modifierPatient() {
 
    this.patientService.modifierPatient(this.patient.id,this.patient)
      .subscribe(data => { 
        localStorage.setItem('patient',JSON.stringify(data))
        this.patient=JSON.parse(localStorage.getItem('patient'));
        this.myapp.Success("Profil modifié avec succès");
      }
      , error =>  this.myapp.Echec("Modification échoué"));
      this.patient = new Patient();
  }

}
