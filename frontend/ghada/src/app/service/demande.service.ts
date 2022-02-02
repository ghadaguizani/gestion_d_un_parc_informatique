import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { demande } from '../model/demande.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
demandes:demande[];
  constructor(private httpClient:HttpClient) { }
   addDemande(newdemande:demande)
   {
    const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newdemande);
return this.httpClient.post<any>('http://localhost:8092/spring/api/add-demande',body,{'headers':headers}).subscribe(data => {
  data.id;
  
})
   }
getDemandes():Observable<any>
{
return this.httpClient.get("http://localhost:8092/spring/api/demandes");
}

   
}
