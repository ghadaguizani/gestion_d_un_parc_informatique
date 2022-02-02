import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Materiel } from "../model/materiel.model";
import { MateriellService } from "../service/materiell.service";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  Materiel: Materiel[] | undefined;

  private headers=new Headers({'Content-Type':'application/json'});
  constructor(private httpClient:HttpClient,private materielService: MateriellService,public authservice:AuthService) {
  
    materielService.getAllMateriel().subscribe(
  resp=>{
    this.Materiel = resp ;
  },err=>{
    console.log("error");
  }
);
}
supprimerMateriel(id:any) {
  let conf=confirm("etes vous sur?")
   if(conf)
  {
  this.materielService.deleteMateriel(id).subscribe(
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
