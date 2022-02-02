import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedIn:boolean;
  loggedUser:any;
  role:string;
  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
   
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined;
   // this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');

    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
    }
  

}
