import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { demande } from '../model/demande.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemandeService {
demandes:demande[];
demande:any=new demande();
url:any;
baseUrl:any;
  constructor(private httpClient:HttpClient) {
    this.httpClient.get("http://localhost:8092/spring/api/demandes").subscribe(
      res=>{
        this.demandes=Object.values(res);
      }
    )
   }
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
deleteDemande(id:any)
{
 this.url="http://localhost:8092/spring/api/supprim-demande/";
 this.baseUrl=this.url.concat(id.toString());
this.httpClient.delete(this.baseUrl);


}
consulterDemande(id:any):demande{
this.demande=this.demandes.find(p=>p.idD==id);
return this.demande;
}
update(d:any)
{
this.deleteDemande(d);
this.addDemande(d);

}

   
}
