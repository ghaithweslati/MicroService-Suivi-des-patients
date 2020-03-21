import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';

const routes: Routes = [
  { path: '', redirectTo: 'dossiers', pathMatch: 'full' },
  { path: 'dossiers', component: ListeDossierComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
