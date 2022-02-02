import { Component, OnInit } from '@angular/core';
import { intervention } from '../model/intervention.model';
import { InterventionService } from '../service/intervention.service';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent implements OnInit {
Intervention:intervention[];
  constructor(private interventionService:InterventionService,public authservice:AuthService) { 
    this.interventionService.getAllIntervention().subscribe(
      resp=>{
        this.Intervention=resp;
      }
    )
  }
  user:any=localStorage.getItem('loggedUser');

  ngOnInit(): void {
    
  }
  supprimerIntervention(id:number)
  {
    let conf=confirm("etes vous sur?")
    if(conf)
   {this.interventionService.supprimIntervention(id).subscribe(
     resp=>{
       console.log(resp);
       location.reload();
     },err=>{
       console.log("error");
       
     }
   );}
    }

}
