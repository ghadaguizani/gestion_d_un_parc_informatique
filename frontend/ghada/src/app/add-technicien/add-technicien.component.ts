import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Technicien } from '../model/technicien.model';
import { TechnicienService } from '../service/technicien.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-technicien',
  templateUrl: './add-technicien.component.html',
  styleUrls: ['./add-technicien.component.css']
})
export class AddTechnicienComponent implements OnInit {

  newTechnicien = new Technicien();
  constructor(private httpClient:HttpClient,private technicienService: TechnicienService,private router:Router) { }
  confirmationString:String ="New technicien has been added";  
isAdded:boolean=false;
  ngOnInit(): void {
  }
  
      onSubmit(f: NgForm) {
       
     //   console.log(this.newTechnicien);

    this.technicienService.addTechnicien(this.newTechnicien);  
   // document.write("l admin est ajouté"); 
   
   window.alert("Le technicien est ajouté !");
   this.router.navigate(['technicien']);
   isAdded:true;

       
       }
}
