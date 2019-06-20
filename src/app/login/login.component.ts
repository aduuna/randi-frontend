import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service'

@Component({
  selector: '.app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  failed = false;
  constructor(private _authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }
  flush(){ this.failed=false}

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    console.log(this.loginForm.value)
    this._authService.loginUser(this.loginForm.value)
    .subscribe(
      (res) => {
        localStorage.setItem('user', JSON.stringify(res['user']));
        localStorage.setItem('token', res['token'])
      },
      (err)=>{this.failed = true},
      ()=>{this.router.navigateByUrl('')}
    )
  }

}
