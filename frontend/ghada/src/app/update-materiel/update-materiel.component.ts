import { Component, OnInit } from '@angular/core';
import { MateriellService } from '../service/materiell.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Materiel } from '../model/materiel.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.css']
})
export class UpdateMaterielComponent implements OnInit {
currentMateriel=new Materiel();
  constructor(private materielservice:MateriellService,private activatedrouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.activatedrouter.snapshot.params['id']);
    this.currentMateriel=this.materielservice.consulterMateriel(this.activatedrouter.snapshot.params['id']);
    console.log(this.currentMateriel);
  }
  onSubmit(f:NgForm)
  {
    this.materielservice.updateMateriel(this.currentMateriel);
    this.router.navigate(['materiel']);

  }

}
