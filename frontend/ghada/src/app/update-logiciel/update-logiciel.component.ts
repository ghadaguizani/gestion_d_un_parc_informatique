import { Component, OnInit } from '@angular/core';
import { Logiciel } from '../model/logiciel.model';
import { LogicielService } from '../service/logiciel.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-logiciel',
  templateUrl: './update-logiciel.component.html',
  styleUrls: ['./update-logiciel.component.css']
})
export class UpdateLogicielComponent implements OnInit {
currentLogiciel=new Logiciel();
  constructor(private logicielservice:LogicielService,private activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.activatedroute.snapshot.params['id']);

this.currentLogiciel=this.logicielservice.consulterLogiciel(this.activatedroute.snapshot.params['id']);
console.log(this.currentLogiciel);
  }
  onSubmit(f:NgForm)
  {
    this.logicielservice.updateLogiciel(this.currentLogiciel);
    alert("le logiciel est modifié ave succés");
    this.router.navigate(['logiciel']);
  }

}
