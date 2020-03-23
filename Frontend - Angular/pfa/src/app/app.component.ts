import { Component } from '@angular/core';
import { ToasterService } from './toaster-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pfa';
  constructor(private toasterService :ToasterService)
  {

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
