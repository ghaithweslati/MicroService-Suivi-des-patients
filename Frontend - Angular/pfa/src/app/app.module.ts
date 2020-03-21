import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutDossierComponent } from './ajout-dossier/ajout-dossier.component';
import { AfficherDossierComponent } from './afficher-dossier/afficher-dossier.component';
import { ListeDossierComponent } from './liste-dossier/liste-dossier.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjoutDossierComponent,
    AfficherDossierComponent,
    ListeDossierComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule, HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
