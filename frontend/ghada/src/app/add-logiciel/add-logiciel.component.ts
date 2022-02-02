import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Logiciel } from '../model/logiciel.model';
import { LogicielService } from '../service/logiciel.service';

@Component({
  selector: 'app-add-logiciel',
  templateUrl: './add-logiciel.component.html',
  styleUrls: ['./add-logiciel.component.css']
})
export class AddLogicielComponent implements OnInit {

  newLogiciel = new Logiciel();
  constructor(private httpClient:HttpClient,private logicielService: LogicielService) { }
  
  ngOnInit(): void {
  }
 /* addLogiciel(){
    console.log(this.newLogiciel);
    this.logicielService.addLogiciel(this.newLogiciel);   
    document.write("le logiciel est ajouté"); 

      }*/
      onSubmit(f: NgForm) {
        /*if (f.valid) {
          this.message = 'The form is VALID';
        }
        if (f.invalid){
          this.message = 'The form is INVALID';
        }*/
        console.log(this.newLogiciel);

    this.logicielService.addLogiciel(this.newLogiciel);  
   // document.write("l admin est ajouté"); 
   
   window.alert("Le logiciel est ajouté !");
   isAdded:true;

       
       }
}
