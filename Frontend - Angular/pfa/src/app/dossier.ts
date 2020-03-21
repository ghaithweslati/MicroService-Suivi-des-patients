import { Patient } from './patient';

export class Dossier {
    code: number;
    nom:String;
    type:String;
    date_doss: String;
    patient:Patient = new Patient();
}