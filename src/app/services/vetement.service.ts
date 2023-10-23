import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Genre } from '../model/genre.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { gerneWrapper } from '../model/genreWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class VetementService {

  apiURL: string = "http://localhost:8080/vetements/api";
  apiURLge: string = "http://localhost:8080/vetements/ge";



 vetements!: Vetement[];
//genre!:Genre[];
  constructor(private http : HttpClient) {


   }

 
  listVetement(): Observable<Vetement[]>{
    return this.http.get<Vetement[]>(this.apiURL);
    }
    
ajouterVetement( vet: Vetement):Observable<Vetement>{
  return this.http.post<Vetement>(this.apiURL, vet, httpOptions);
  }


supprimerVetement(id:number){
 /* const index=this.vetements.indexOf(vet,0);
  if(index> -1){
    this.vetements.splice(index,1);
  }*/
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}

  consulterVetement(id: number): Observable<Vetement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Vetement>(url);
    }
 
  updateVetement(v:Vetement) : Observable<Vetement>{
  return this.http.put<Vetement>(this.apiURL, v, httpOptions);
}

  trierVetements(){
    this.vetements = this.vetements.sort((n1,n2) => {
    if(n1 .idVetement > n2.idVetement) {
    return 1;
    }
    if (n1.idVetement < n2.idVetement) {
    return -1;
    }
    return 0;
    });
    }
 
    listeGenre():Observable<gerneWrapper>{
      return this.http.get<gerneWrapper>(this.apiURLge);
      }
     
        
      /*consulterGenre(id:number): Genre{
      return this.genre.find(ge => ge.idG == id)!;
      } */
      rechercherParGenre(idG: number):Observable< Vetement[]> {
        const url = `${this.apiURL}/vetGen/${idG}`;
        return this.http.get<Vetement[]>(url);
        }
        rechercherParNom(nom: string):Observable< Vetement[]> {
          const url = `${this.apiURL}/vetByName/${nom}`;
          return this.http.get<Vetement[]>(url);
          } 

          ajouterGenre(ge: Genre):Observable<Genre>{
            return this.http.post<Genre>(this.apiURLge, ge, httpOptions);
            }


}
