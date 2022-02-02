import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { Materiel } from '../model/materiel.model';
import { MateriellService } from '../service/materiell.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  newMateriel = new Materiel();
  constructor(private httpClient:HttpClient,private materielService: MateriellService) { }
 
  ngOnInit(): void {
  }
  /*addMateriel(){
    console.log(this.newMateriel);
    this.materielService.addMateriel(this.newMateriel);  
    document.write("le matériel est ajouté"); 
      }*/
      onSubmit(f: NgForm) {
        /*if (f.valid) {
          this.message = 'The form is VALID';
        }
        if (f.invalid){
          this.message = 'The form is INVALID';
        }*/
        console.log(this. newMateriel);

    this.materielService.addMateriel(this. newMateriel);  
   // document.write("l admin est ajouté"); 
   
   window.alert("Le matériel est ajouté !");
   isAdded:true;

       
       }  
}
