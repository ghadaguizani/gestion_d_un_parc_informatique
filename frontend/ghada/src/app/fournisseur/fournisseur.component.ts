import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../service/fournisseur.service';
import { Fournisseur } from "../model/fournisseur.model";
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  Fournisseur: Fournisseur[] | undefined;

  private headers=new Headers({'Content-Type':'application/json'});
  constructor(private httpClient:HttpClient,private fournisseurservice: FournisseurService,public authservice:AuthService) {
  
    fournisseurservice.getAllFournisseur().subscribe(
  resp=>{
    this.Fournisseur = resp ;
  },err=>{
    console.log("error");
  }
);
} 
supprimerFournisseur(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {this.fournisseurservice.deleteFournisseur(id).subscribe(
    resp=>{
      console.log(resp);
      location.reload();
    },err=>{
      console.log("error");
      
    }
  );}
  
}
ngOnInit(): void {
}

}
