import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public status;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    if(this._authService.isLoggedIn()){
      this.status = true;
    }
  }

}
