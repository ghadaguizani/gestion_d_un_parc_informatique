import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogicielService } from '../service/logiciel.service';
import { Logiciel } from "../model/logiciel.model";
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-logiciel',
  templateUrl: './logiciel.component.html',
  styleUrls: ['./logiciel.component.css']
})
export class LogicielComponent implements OnInit {
  Logiciel: Logiciel[] | undefined;

  private headers=new Headers({'Content-Type':'application/json'});
  constructor(private httpClient:HttpClient,private logicielservice: LogicielService,public authservice:AuthService) {
  
    logicielservice.getAllLogiciel().subscribe(
  resp=>{
    this.Logiciel = resp ;
  },err=>{
    console.log("error");
  }
);
}
supprimerLogiciel(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.logicielservice.deleteLogiciel(id).subscribe(
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
