import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Observable } from "rxjs";
import { Patient } from "../patient";
import { Router } from '@angular/router';
import { ConsultationService } from "../consultation.service";
import { AppComponent } from '../app.component';
import { Consultation } from "../consultation";


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

          for(let i=0;i<this.consultations.length;i++)
          {
          tabs.push( this.consultations[i].date);
          tab2.push(this.consultations[i].etat)
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

}
