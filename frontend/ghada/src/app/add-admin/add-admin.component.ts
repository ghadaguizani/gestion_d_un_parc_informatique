import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  newAdmin = new Admin();
 message: string | undefined;
  constructor(private httpClient:HttpClient,private adminService: AdminService) { }
  confirmationString:String ="New admin has been added";  
isAdded:boolean=false;
  ngOnInit(): void {
  }
 
      onSubmit(f: NgForm) {
        
        console.log(this.newAdmin);

    this.adminService.addAdmin(this.newAdmin);  
   // document.write("l admin est ajouté"); 
   
   window.alert("L admin est ajouté !");
   isAdded:true;

       
       }
      
}
