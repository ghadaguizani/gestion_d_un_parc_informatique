import { Component, OnInit } from '@angular/core';
import { intervention } from '../model/intervention.model';
import { InterventionService } from '../service/intervention.service';
@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent implements OnInit {
Intervention:intervention[];
  constructor(private interventionService:InterventionService) { 
    this.interventionService.getAllIntervention().subscribe(
      resp=>{
        this.Intervention=resp;
      }
    )
  }
  user:any=localStorage.getItem('loggedUser');

  ngOnInit(): void {
    
  }

}
