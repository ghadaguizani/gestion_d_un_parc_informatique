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
  
}
