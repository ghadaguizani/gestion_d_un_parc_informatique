import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { intervention } from '../model/intervention.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  constructor(private httpClient:HttpClient) {

   }
   getAllIntervention():Observable<any>
   {
    return this.httpClient.get("http://localhost:8092/spring/api/interventions");
   }
   addIntervention(newIntervention:intervention)
   {
    console.warn(JSON.stringify(newIntervention));
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(newIntervention);  
    this.httpClient.post<any>("http://localhost:8092/spring/api/add-inter",body,{'headers':headers}).subscribe(data=>{
      data.id;
    }) 
  }
  supprimIntervention(id:number)
  {
    let url="http://localhost:8092/spring/api/supprim-inter/";
    let baseUrl=url.concat(id.toString());
    return this.httpClient.delete(baseUrl);
  }
  
}
