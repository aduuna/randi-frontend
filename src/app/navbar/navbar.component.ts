import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public username;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    if(this._authService.isLoggedIn){
      console.log(localStorage.getItem('user'));
      this.username = JSON.parse(localStorage.getItem('user'))
    }

  }

}
