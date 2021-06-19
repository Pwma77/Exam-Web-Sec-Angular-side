import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = "";

  public password = "";

  public cUsername = "username";

  public cPassword = "password";

  constructor( public router:Router) { }

  ngOnInit(): void {
  }

  LoginFake(username, password){
    if (this.username == this.cUsername && this.password == this.cPassword) {
      this.router.navigate(['home']);
    }else{
      alert("Please, try again");
    }
  }

}
