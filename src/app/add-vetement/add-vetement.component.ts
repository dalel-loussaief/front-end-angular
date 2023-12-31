import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Genre } from '../model/genre.model';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
 
})
export class AddVetementComponent implements OnInit{
genre!:Genre[];
newIdG!:number;
newGenre!: Genre;
newVetement =new Vetement();
  message!: string;

  constructor(private vetementService : VetementService,
    private router:Router){

  }
  ngOnInit():void{
   //this.genre=this.vetementService.listeGenre();
    this.vetementService.listeGenre().
   subscribe(ge => {this.genre = ge._embedded.genres;
   console.log(ge);
   });
    
 
  }


  addVetement(){
  
    this.newVetement.genre = this.genre.find(ge => ge.idG == this.newIdG)!;
    this.vetementService.ajouterVetement(this.newVetement).subscribe(vet => {
    console.log(vet);
    this.router.navigate(['vetements']);
    });   
  
   
    

  }

}
