import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logiciel } from '../model/logiciel.model'

@Injectable({
  providedIn: 'root'
})
export class LogicielService {
logiciel:any=new Logiciel();
logiciels:Logiciel[];
  constructor(private httpClient:HttpClient) {
    this.httpClient.get("http://localhost:8092/spring/api/logiciel").subscribe(
      resp=>{
       // console.log(resp);
        this.logiciels=Object.values(resp);
       // console.warn(this.logiciels);
      }
    )
   }
  Logiciel: Logiciel[] ;

  getAllLogiciel():Observable<any>{
    //console.log(motCle);
    return this.httpClient.get("http://localhost:8092/spring/api/logiciel");

  }
 addLogiciel(newLogiciel:Logiciel){
   console.warn(JSON.stringify(newLogiciel));
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newLogiciel);
   return  this.httpClient.post<any>('http://localhost:8092/spring/api/add-logiciel',body,{'headers':headers}).subscribe(data => {
    data.id;
    
});
 }
 deleteLogiciel(id:any):Observable<any>
 {
   let url='http://localhost:8092/spring/api/supprim-logiciel/';
   let baseurl=url.concat(id.toString());
   return this.httpClient.delete(baseurl);
 }
 consulterLogiciel(id:any):Logiciel
 {
   this.logiciel=this.logiciels.find(p=>p.id_logiciel==id);
   return this.logiciel;
 }
 updateLogiciel(l:Logiciel)
 {
   this.deleteLogiciel(l);
   this.addLogiciel(l);
 }

 
}