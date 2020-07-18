import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import * as jsPDF from 'jspdf';
import { Consultation } from "../consultation";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { ConsultationService } from "../consultation.service";
import { Patient } from "../patient";
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  public calendarPlugins = [dayGridPlugin, interactionPlugin];

  

@ViewChild('myDiv') myDiv: ElementRef; 
consultations:Consultation[] = [];
consultation: Consultation = new Consultation();
patients: Observable<Patient[]>;
events=[];
  constructor(private consultationService: ConsultationService,public myapp: AppComponent,
    private router: Router) {
      myapp.titre="Consultations"
     }

  ngOnInit(): void {
    this.afficherConsultations();
    this.afficherPatients();
  }

  handleDateClick(arg) {
    this.myDiv.nativeElement.style.display='block';
    this.consultation.date=arg.dateStr;
  }

  handleEventClick(arg) {
    this.myDiv.nativeElement.style.display='block';
    this.consultation=this.consultations[arg.event.id];
  }

  fermer()
  {
    this.myDiv.nativeElement.style.display='none';
  }

  valueChanged(e) {
    this.consultation.etat=e;
  }

  afficherConsultations() {
   var tabs=[];
     this.consultationService.getListeConsultation().subscribe(
       consultations => {
         this.consultations = consultations;
         for(let i=0;i<this.consultations.length;i++)
         tabs.push( { title: this.consultations[i].heure+'h '+this.consultations[i].patient.nom+' '+this.consultations[i].patient.prenom, date: this.consultations[i].date,id:i });
        this.events=tabs;
        }
       )
      
  } 

  afficherPatients() {
    this.patients = this.consultationService.getListePatient();
  }



  ajouterConsultation() {
    
    this.consultationService.ajouterConsultation(this.consultation)
      .subscribe(data => {
        this.afficherConsultations()
        this.myapp.Success("Consultation enregistré avec succès");
      }, error => this.myapp.Echec("Enregistrement de consultation échouée"));
      this.consultation = new Consultation();
      this.fermer()

  }


}
