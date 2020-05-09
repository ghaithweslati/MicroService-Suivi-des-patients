import { Patient } from './patient';

export class Consultation {
    code: number;
    remarque:String;
    type:String;
    date: String;
    heure:String;
    etat:number;
    patient:Patient = new Patient();
}