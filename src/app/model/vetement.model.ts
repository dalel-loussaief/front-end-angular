import { Genre } from "./genre.model";

export class Vetement {
    idVetement! : number;
    nomVetement! : string;
    prixVetement! : number;
    dateprod! : Date ;
    genre!:Genre;
    }