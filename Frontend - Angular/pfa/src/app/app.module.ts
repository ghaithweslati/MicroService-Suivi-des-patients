import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ToasterService } from './toaster-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListeDossierComponent,
    ListePatientComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, HttpClientModule 
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
