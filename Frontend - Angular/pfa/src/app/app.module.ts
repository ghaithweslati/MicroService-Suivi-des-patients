import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ToasterService } from './toaster-service.service';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ConsultationComponent } from './consultation/consultation.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EtatComponent } from './etat/etat.component';
import { LoginComponent } from './login/login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ListeDossierComponent,
    ListePatientComponent,
    ChatbotComponent,
    ConsultationComponent,
    EtatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, HttpClientModule ,
    FullCalendarModule
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
