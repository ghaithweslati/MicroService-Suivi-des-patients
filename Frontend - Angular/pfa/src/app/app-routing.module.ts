import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EtatComponent } from './etat/etat.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent} ,
  { path: 'dossiers', component: ListeDossierComponent },
  { path: 'patients', component: ListePatientComponent },
  { path: 'chatbot', component: ChatbotComponent},
  { path: 'consultation', component: ConsultationComponent } ,
  { path: 'etat', component: EtatComponent } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
