import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { User} from '../model/user.model';
import { AuthService } from '../service/auth.service';
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
  onLoggedin()
  {this.a=this.authservice.signIn(this.user);
    if(this.a)
    {
      this.router.navigate(['/']);

    }
    else
    {
      
      this.erreur = 1;

  }
 

}}
