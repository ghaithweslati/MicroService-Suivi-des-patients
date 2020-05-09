import { Component } from '@angular/core';
import { ToasterService } from './toaster-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa';
  titre;
  visible=false;
  nom;
  myImage : string = "https://www.icone-png.com/png/28/28461.png";
  patient = JSON.parse(localStorage.getItem('patient'));
  constructor(private toasterService :ToasterService)
  {
    if(localStorage.getItem('patient'))
    {

      this.nom=this.patient.nom+' '+this.patient.prenom;
    }
  }

  public Success(msg:string)
  {
    this.toasterService.Success(msg);
  }

  public Echec(msg:string)
  {
    this.toasterService.Echec(msg);
  }

}
