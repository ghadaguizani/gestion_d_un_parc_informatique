import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';
import { User } from '../model/user.model';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

//Admins:Admin[];
user:any=new User();
admin:any=new Admin();
admins:Admin[];
  private headers=new Headers({'Content-Type':'application/json'});
  constructor(private httpClient:HttpClient,private adminService: AdminService,public authservice:AuthService) {
  
adminService.getAllAdmin().subscribe(
  resp=>{
    
    this.admins= resp ;
  }
);


} 

 supprimerAdmin(id:any) {
   let conf=confirm("etes vous sur?")
   if(conf)
  {this.adminService.deleteAdmin(id).subscribe(
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



 
