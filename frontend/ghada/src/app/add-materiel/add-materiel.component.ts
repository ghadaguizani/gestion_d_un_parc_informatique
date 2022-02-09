import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { Materiel } from '../model/materiel.model';
import { MateriellService } from '../service/materiell.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  newMateriel = new Materiel();
  constructor(private httpClient:HttpClient,private materielService: MateriellService,private router:Router) { }
 
  ngOnInit(): void {
  }
 
      onSubmit(f: NgForm) {
       
       // console.log(this. newMateriel);

    this.materielService.addMateriel(this. newMateriel);  
   // document.write("l admin est ajouté"); 
   
   window.alert("Le matériel est ajouté !");
   this.router.navigate(['materiel']);
   isAdded:true;

       
       }  
}
