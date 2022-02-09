import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Admin } from '../model/admin.model';
import { Observable } from 'rxjs';
import { AdminsComponent } from '../admins/admins.component';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
 

admins:Array<Admin> = [];
admin:any=new Admin();
  constructor(private httpClient:HttpClient) {

    this.httpClient.get("http://localhost:8092/spring/api/admins").subscribe(
      resp=>{
       // console.log(resp);
        this.admins = Object.values(resp);
        //console.warn(this.admins);
      }
    );
   }

 
  getAllAdmin():Observable<any>{
    return this.httpClient.get("http://localhost:8092/spring/api/admins");

  }
 addAdmin(newAdmin:Admin){
   //console.warn(JSON.stringify(newAdmin));
   const headers = { 'content-type': 'application/json'}  
   const body=JSON.stringify(newAdmin);
   return  this.httpClient.post<any>('http://localhost:8092/spring/api/add-admin',body,{'headers':headers}).subscribe(data => {
    data.id;
    
});

  }
  consulterAdmin(id:number): Admin{
   // console.log(this.admins);
  this.admin=this.admins.find(p => p.id_ad== id);
  return this.admin;
      }
    
  deleteAdmin(id:any):Observable<any>
  {
    let url='http://localhost:8092/spring/api/supprim-admin/';
    let baseurl=url.concat(id.toString());
    return this.httpClient.delete(baseurl);
  }
  
updateAdmin(a:Admin)
{
// console.log(p);
this.deleteAdmin(a);
this.addAdmin(a);
}

    
  



}
