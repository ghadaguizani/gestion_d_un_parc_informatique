import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../service/fournisseur.service';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from '../model/fournisseur.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {
currentFournisseur:any=new Fournisseur();
  constructor(private fournisseurservice:FournisseurService,private activatedroute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log(this.activatedroute.snapshot.params['id']);
    this.currentFournisseur=this.fournisseurservice.consulterFournisseur(this.activatedroute.snapshot.params['id']);
    //console.log(this.currentFournisseur);
  }
  onSubmit(f:NgForm)
  {
    this.fournisseurservice.updateFournisseur(this.currentFournisseur);
    alert("le fournisseur est modifié avec succés");
    this.router.navigate(['fournisseur']);
  }

}
