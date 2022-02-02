import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../model/fournisseur.model';
import { FournisseurService } from '../service/fournisseur.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  newFournisseur = new Fournisseur();
  constructor(private httpClient:HttpClient,private fournisseurService: FournisseurService) { }
  ;
  ngOnInit(): void {
  }
  
      onSubmit(f: NgForm) {
       
        console.log(this.newFournisseur);

    this.fournisseurService.addFournisseur(this.newFournisseur);  

   window.alert("Le fournisseur est ajouté !");
   isAdded:true;

       
       }
       /* onSubmit(f: NgForm) {
        
        console.log(this.newAdmin);

    this.adminService.addAdmin(this.newAdmin);  
   // document.write("l admin est ajouté"); 
   
   window.alert("L admin est ajouté !");
   isAdded:true;

       
       } */
}
