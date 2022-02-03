import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { User} from '../model/user.model';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;
a:boolean;
  constructor(private authservice:AuthService,
    private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(f: NgForm)
  {this.a=this.authservice.signIn(this.user);
    if(this.a)
    {
      this.router.navigate(['/immg']);

    }
    else
    {
      
      this.erreur = 1;

  }
 

}}
