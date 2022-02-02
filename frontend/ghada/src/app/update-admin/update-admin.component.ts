import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
currentAdmin=new Admin();
private headers=new Headers({'Content-Type':'application/json'});
  constructor(private activatedRoute:ActivatedRoute ,private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
   this.currentAdmin = this.adminService.consulterAdmin(this.activatedRoute.snapshot.params['id']);
console.log(this.currentAdmin);
  }
  
  onSubmit(f: NgForm)
  {
    this.adminService.updateAdmin(this.currentAdmin);
    this.router.navigate(['admins']);

  }

}
