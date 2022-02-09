import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Logiciel } from '../model/logiciel.model';
import { LogicielService } from '../service/logiciel.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-logiciel',
  templateUrl: './add-logiciel.component.html',
  styleUrls: ['./add-logiciel.component.css']
})
export class AddLogicielComponent implements OnInit {

  newLogiciel = new Logiciel();
  constructor(private httpClient:HttpClient,private logicielService: LogicielService,private router:Router) { }
  
  ngOnInit(): void {
  }

      onSubmit(f: NgForm) {
       
        //console.log(this.newLogiciel);

    this.logicielService.addLogiciel(this.newLogiciel);  
   // document.write("l admin est ajouté"); 
   
   window.alert("Le logiciel est ajouté !");
   this.router.navigate(['logiciel']);
   isAdded:true;

       
       }
}
