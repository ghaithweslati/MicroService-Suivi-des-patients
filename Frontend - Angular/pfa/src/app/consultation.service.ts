import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from './consultation';

@Injectable({
  providedIn: 'root'
})



export class ConsultationService {

  private baseUrl = 'http://localhost:8080/gestion-consultations-service/consultations';


  constructor(private http: HttpClient) { }

  ajouterConsultation(consultation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, consultation);
  }

  modifierConsultation(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

getListePatient(): Observable<any> {
  return this.http.get('http://localhost:8080/gestion-consultations-service/patients');
}

getListeConsultation() {
  return this.http.get<Consultation[]>(`${this.baseUrl}`);
}

getListeConsultationPatient(id: number) {
  return this.http.get<Consultation[]>(`${this.baseUrl}/${id}`);
}

supprimerConsultation(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
}



}