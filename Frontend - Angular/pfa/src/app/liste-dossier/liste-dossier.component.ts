import { Component, OnInit } from '@angular/core';
import { Dossier } from "../dossier";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { DossierService } from "../dossier.service";
import { Patient } from "../patient";
import { AppComponent } from '../app.component';

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
  constructor(private dossierService: DossierService,public myapp: AppComponent,
    private router: Router) {
      myapp.titre="Dossiers";
    }


  ngOnInit(): void {
    this.reloadData();
    this.afficherPatients();

  }

  reloadData() {
    this.dossiers = this.dossierService.getListeDossier();
  }

  init(dossier)
  {
    this.dossier=Object.assign({}, dossier);
  }

  ajouterDossier() {
    
    this.dossier.nom=this.dossier.nom.split("fakepath\\")[0]+this.dossier.nom.split("fakepath\\")[1];
    this.dossierService.ajouterDossier(this.dossier)
      .subscribe(data => {
        this.reloadData();
        this.myapp.Success("Dossier ajouté avec succès");
      }, error => this.myapp.Echec("Ajout de dossier échouée"));
      this.dossier = new Dossier();

  }

  modifierDossier() {
      this.dossier.nom=this.dossier.nom.split("fakepath\\")[0]+this.dossier.nom.split("fakepath\\")[1];
      this.dossierService.modifierDossier(this.dossier.code,this.dossier)
      .subscribe(data =>{
        this.reloadData();
        this.myapp.Success("Dossier modifié avec succès");
      } , error => this.myapp.Echec("Modification de dossier échouée"));
      this.dossier = new Dossier();
  }


  supprimerDossier(id: number) {

    if (confirm("Voulez vous vraiment supprimer ce dossier")) {
      {
        this.dossierService.supprimerDossier(id)
        .subscribe(
          data => {
            this.reloadData();
            this.myapp.Success("Dossier supprimé avec succès")
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
