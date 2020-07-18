import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Observable } from "rxjs";
import { Patient } from "../patient";
import { Router } from '@angular/router';
import { ConsultationService } from "../consultation.service";
import { AppComponent } from '../app.component';
import { Consultation } from "../consultation";
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class EtatComponent implements OnInit {

  patients: Observable<Patient[]>;
  labels=[];
  data=[];
  consultations:Consultation[] = [];
  rapport="";
  constructor(private consultationService: ConsultationService,public myapp: AppComponent,
    private router: Router) { 
      myapp.titre="Etat du patient"
  }

  LineChart=[];
  ngOnInit(): void {
    this.afficherPatients();
    
    
  }


  afficherPatients() {
    this.patients = this.consultationService.getListePatient();
  }

  afficherChart(id:number) {
    var tabs=[];
    var tab2=[];
      this.consultationService.getListeConsultationPatient(id).subscribe(
        consultations => {
          this.consultations = consultations;

          const pat = this.consultations[0].patient;
          this.rapport+="Patient:\n"
          this.rapport+="Nom & prénom: "+pat.nom+" "+pat.prenom+"\n";
          this.rapport+="Email: "+pat.email+"\n";
          this.rapport+="Num tel: "+pat.numTelephone+"\n";
          this.rapport+="Adresse: "+pat.adresse+"\n\n";
          this.rapport+="Les consultations :\n";
          for(let i=0;i<this.consultations.length;i++)
          {
          tabs.push( this.consultations[i].date);
          tab2.push(this.consultations[i].etat)

          this.rapport+="\nConsultation "+(i+1)+"\n";
          this.rapport+="Dat1e : "+this.consultations[i].date +" "+this.consultations[i].heure+"\n";
          this.rapport+="Type : "+this.consultations[i].type+"\n";
          this.rapport+="Etat du patient : "+this.consultations[i].etat+"/10 \n";
          if(this.consultations[i].remarque)
             this.rapport+="Remarque : "+this.consultations[i].remarque+"\n";
          }
         this.labels=tabs;
         this.data=tab2;
  
         this.LineChart = new Chart('lineChart', {
          type: 'line',
        data: {
         labels: this.labels,
         datasets: [{
             label: "L'état du patient ?/10",
             data: this.data,
             fill:false,
             lineTension:0.2,
             borderColor:"blue",
             borderWidth: 1
         }]
        }, 
        options: {
         title:{
             text:"",
             display:true
         },
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
        }
        });


         }


         
        )
 
   } 
  
onChange(deviceValue) {
  this.afficherChart(deviceValue);
}


generatePDF()
{
    const doc = new jsPDF();
    doc.text(this.rapport,15,15);
    doc.save("Rapport.pdf" );
}

}
