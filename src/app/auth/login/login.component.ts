import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authError: any;
  user:firebase.User;

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }

  login(frm) {
    this.auth.login(frm.value.email, frm.value.password);
  }

  
  Login() {
    this.router.navigate(['/adminpage']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
