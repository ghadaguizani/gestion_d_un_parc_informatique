import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../model/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  Fournisseur: Fournisseur[];
  fournisseur:any=new Fournisseur();
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get("http://localhost:8092/spring/api/fournisseur").subscribe(
resp=>{
  this.Fournisseur=Object.values(resp);
}
    );
  }


  getAllFournisseur():Observable<any>{
    //console.log(motCle);
    return this.httpClient.get("http://localhost:8092/spring/api/fournisseur");

  }
 addFournisseur(newFournisseur:Fournisseur){
   //console.warn(JSON.stringify(newFournisseur));
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newFournisseur);
   return  this.httpClient.post<any>('http://localhost:8092/spring/api/add-fournisseur',body,{'headers':headers}).subscribe(data => {
    data.id;
    
});
 }
 deleteFournisseur(id:any):Observable<any>
 {
   let url='http://localhost:8092/spring/api/supprim-fournisseur/';
   let baseurl=url.concat(id.toString());
   return this.httpClient.delete(baseurl);
 }
 consulterFournisseur(id:any):Fournisseur
 {
this.fournisseur=this.Fournisseur.find(p=>p.id_fournisseur==id);
return this.fournisseur;
 }
 updateFournisseur(f:Fournisseur)
 {
   this.deleteFournisseur(f);
   this.addFournisseur(f);
 }
}