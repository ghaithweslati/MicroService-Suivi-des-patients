import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class DossierService {

  private baseUrl = 'http://localhost:8080/gestion-dossiers-service/dossiers';


  constructor(private http: HttpClient) { }

  ajouterDossier(dossier: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, dossier);
  }

  modifierDossier(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

getListePatient(): Observable<any> {
  return this.http.get('http://localhost:8080/gestion-dossiers-service/patients');
}

getListeDossier(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}

supprimerDossier(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}