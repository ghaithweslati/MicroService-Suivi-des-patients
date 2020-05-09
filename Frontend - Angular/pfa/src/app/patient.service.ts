import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})



export class PatientService {

  private baseUrl = 'http://localhost:8080/gestion-patients-service/patients';


  constructor(private http: HttpClient) { }

  ajouterPatient(patient: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, patient);
  }

  modifierPatient(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getPatient(email: String) {
    return this.http.post<Patient>('http://localhost:8080/gestion-patients-service/patient',email);
  }


getListePatient(): Observable<any> {
  return this.http.get(`${this.baseUrl}`);
}

supprimerPatient(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}

}