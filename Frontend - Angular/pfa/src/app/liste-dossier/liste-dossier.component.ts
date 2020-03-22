import { Component, OnInit } from '@angular/core';
import { Dossier } from "../dossier";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DossierService } from "../dossier.service";
import { Patient } from "../patient";

@Component({
  selector: 'app-liste-dossier',
  templateUrl: './liste-dossier.component.html',
  styleUrls: ['./liste-dossier.component.css']
})
export class ListeDossierComponent implements OnInit {
  dossiers: Observable<Dossier[]>;
  dossier: Dossier = new Dossier();
  selectedValue:String;
  patients: Observable<Patient[]>;
  constructor(private dossierService: DossierService,
    private router: Router) {}


  ngOnInit(): void {
    this.reloadData();
    this.afficherPatients();
  }

  reloadData() {
    this.dossiers = this.dossierService.getListeDossier();
  }

  init(dossier)
  {
    this.dossier=dossier;
  }

  ajouterDossier() {
    
    this.dossier.nom=this.dossier.nom.split("fakepath\\")[0]+this.dossier.nom.split("fakepath\\")[1];
    this.dossierService.ajouterDossier(this.dossier)
      .subscribe(data => this.reloadData(), error => console.log(error));
      this.dossier = new Dossier();


  }

  modifierDossier() {
      this.dossier.nom=this.dossier.nom.split("fakepath\\")[0]+this.dossier.nom.split("fakepath\\")[1];
      this.dossierService.modifierDossier(this.dossier.code,this.dossier)
      .subscribe(data => this.reloadData(), error => console.log(error));
      this.dossier = new Dossier();
  }


  supprimerDossier(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce dossier")) {
      {
        this.dossierService.supprimerDossier(id)
        .subscribe(
          data => {this.reloadData()
          },
          error => alert(JSON.stringify(error)));
          this.reloadData();
      }
    } 

  }


  afficherPatients() {
    this.patients = this.dossierService.getListePatient();
  }
}
