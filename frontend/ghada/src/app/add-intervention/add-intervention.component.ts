import { Component, OnInit } from '@angular/core';
import { InterventionsComponent } from '../interventions/interventions.component';
import { intervention } from '../model/intervention.model';
import { NgForm } from '@angular/forms';
import { InterventionService } from '../service/intervention.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.css']
})
export class AddInterventionComponent implements OnInit {
newIntervention:any=new intervention();
  constructor(private intervetionService:InterventionService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
this.intervetionService.addIntervention(this.newIntervention);
window.alert("L'intervention est ajouté !");  
this.router.navigate(['interventions']);

  }

}
