import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { Technicien } from '../model/technicien.model';

@Injectable({
  providedIn: 'root'
})

export class TechnicienService {
  technicien:any=new Technicien();
  Technicien: Technicien[] ;

  constructor(private httpClient:HttpClient) { 
    this.httpClient.get("http://localhost:8092/spring/api/technicien").subscribe(resp=>{
     // console.log(resp);
      this.Technicien = Object.values(resp);
     // console.warn(this.Technicien);
    });

  }

  getAllTechnicien():Observable<any>{
    //console.log(motCle);
    return this.httpClient.get("http://localhost:8092/spring/api/technicien");

  }
 addTechnicien(newTechnicien:Technicien){
   console.warn(JSON.stringify(newTechnicien));
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newTechnicien);
   return  this.httpClient.post<any>('http://localhost:8092/spring/api/add-technicien',body,{'headers':headers}).subscribe(data => {
    data.id;
    
});
 }
 deleteTechnicien(id:any):Observable<any>
 {
   let url='http://localhost:8092/spring/api/supprim-technicien/';
   let baseurl=url.concat(id.toString());
   return this.httpClient.delete(baseurl);
 }
 
 consulterTechnicien(id:number):Technicien
 {
    this.technicien=this.Technicien.find(p=>p.id_technicien==id);
    return this.technicien;
     console.log(this.Technicien);

 }
 updateTechnicien(t:Technicien)
 {
   this.deleteTechnicien(t);
   this.addTechnicien(t);
 }
 
 
}