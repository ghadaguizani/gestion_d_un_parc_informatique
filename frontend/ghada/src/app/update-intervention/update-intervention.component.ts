import { Component, OnInit } from '@angular/core';
import { InterventionService } from '../service/intervention.service';
import { intervention } from '../model/intervention.model';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-intervention',
  templateUrl: './update-intervention.component.html',
  styleUrls: ['./update-intervention.component.css']
})
export class UpdateInterventionComponent implements OnInit {
Intervention:any=new intervention();
  constructor(private interventionService:InterventionService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //console.log(this.activatedroute.snapshot.params['id']);
    this.Intervention=this.interventionService.consulterIntervention(this.activatedroute.snapshot.params['id']);
   // console.log(this.Intervention);

  }
  onSubmit(f:NgForm)
  {
this.interventionService.updateIntervention(this.Intervention);
this.router.navigate(['interventions']);
  }

}
