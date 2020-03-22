import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'dossiers', component: ListeDossierComponent },
  { path: 'patients', component: ListePatientComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
