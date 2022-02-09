import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../service/demande.service';
import { demande } from '../model/demande.model';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
Demande:demande[];
  constructor(private demandeService :DemandeService,public authservice:AuthService) { 
    demandeService.getDemandes().subscribe(
      res=>{
        this.Demande=res;
      }
    )
  }

  ngOnInit(): void {
  }

}
