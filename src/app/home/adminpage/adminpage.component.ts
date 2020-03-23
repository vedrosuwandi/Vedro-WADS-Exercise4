import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  authError: any;
  user:firebase.User;

  constructor(private auth: AuthService, private router:Router) { 
    
  }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
    })
  }

}
