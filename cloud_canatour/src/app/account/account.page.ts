import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  login:boolean= false;
  signup:boolean =false;
  constructor() { }

  ngOnInit() {
  }

  onLogin(){
    this.login = true;
    this.signup = false;
  }

  onSignup(){
    this.login = false;
    this.signup = true;
  }

}
