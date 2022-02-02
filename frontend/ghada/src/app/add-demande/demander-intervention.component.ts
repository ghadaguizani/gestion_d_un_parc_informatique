import { Component, OnInit } from '@angular/core';
import { demande } from '../model/demande.model';
import { NgForm } from '@angular/forms';
import { DemandeService } from '../service/demande.service';
import { Router, RouteReuseStrategy } from '@angular/router';
@Component({
  selector: 'app-demander-intervention',
  templateUrl: './demander-intervention.component.html',
  styleUrls: ['./demander-intervention.component.css']
})
export class DemanderInterventionComponent implements OnInit {
demande:any=new demande();
  constructor(private demandeService:DemandeService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {
    this.demandeService.addDemande(this.demande);
    this.router.navigate(['succes']);

  }

}
