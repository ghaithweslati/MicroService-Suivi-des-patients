import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AppComponent } from '../app.component';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  patient: Patient = new Patient();
  pat: Patient = new Patient();
  @ViewChild('nav') nav: ElementRef; 
  constructor(private patientService: PatientService,public myapp: AppComponent) { 

  }

  ngOnInit(): void {
    this.nav.nativeElement.style.display='none';
  
    
  }

  verifier() {

    if(this.patient.password=='admin' && this.patient.email=='admin@gmail.com')
    {
      localStorage.removeItem('patient');
      window.location.href = "../patients";
      
    }
    else
    {
    this.patientService.getPatient(this.patient.email).subscribe(
      patient => {
        this.pat = patient;
        if(this.pat)
        { 
          if(this.patient.password==patient.password)
          {
            this.myapp.Success("Authentification réussie");
            localStorage.setItem('patient', JSON.stringify(this.pat));
            window.location.href = "../chatbot";
          }
          else
          {
            this.myapp.Echec("Mot de passe incorrecte");
          }
        }
        else
        {
          this.myapp.Echec("Utilisateur inexistant");
        }
       }
      )
     
  }
}

}
