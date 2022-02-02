import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TechnicienService } from '../service/technicien.service';
import { Technicien } from "../model/technicien.model";
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {
  Technicien: Technicien[] | undefined;

  private headers=new Headers({'Content-Type':'application/json'});
  constructor(private httpClient:HttpClient,private technicienservice: TechnicienService,public authservice:AuthService) {
    technicienservice.getAllTechnicien().subscribe(
  resp=>{
    this.Technicien = resp ;
  },err=>{
    console.log("error");
  }
  
);

} 
supprimerTechnicien(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.technicienservice.deleteTechnicien(id).subscribe(
    resp=>{
      console.log(resp);
      location.reload();
    },err=>{
      console.log("error");
      
    }
  );}
}
ngOnInit(): void {
}

}
