import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../tabs/apiservice.service'
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import {SignUpData} from './signup-data.model';
import {Ticket} from '../booking/ticket.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  login:boolean= false;
  signup:boolean =false;
  loginMail:string
  loginPass:string
  signupName:string
  signupMail:string
  signupNum:string
  signupPass:string
  confirmPass:string
  gender:String
  apis:any
  accountExist:boolean
  router:Router
  credentials:any
  otp:any;
  user:any
  signupData:SignUpData
  ticketDetails:Ticket[]=[]
  ticketData:any
  hn = window.location.hostname
  re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  re1=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}/;
  re2=/^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

  constructor(apis:ApiserviceService, _router: Router,public alertController: AlertController) { 
    this.router= _router
    this.apis = apis
    if(localStorage.getItem("credentials")){
      this.accountExist=true
      console.log(localStorage.getItem("credentials"))
      this.credentials=localStorage.getItem("credentials")
      this.loginMail=JSON.parse(this.credentials).user
      this.loginPass=JSON.parse(this.credentials).pass
      this.user=this.loginMail
      if(localStorage.getItem("ticket1"+this.user)){
        if(localStorage.getItem("ticket2"+this.user)){
          this.ticketData=localStorage.getItem("ticket3"+this.user)
          this.ticketDetails.push(JSON.parse(this.ticketData))
        }else{
          this.ticketData=localStorage.getItem("ticket2"+this.user)
          this.ticketDetails.push(JSON.parse(this.ticketData))
        }
      }else{
        this.ticketData=localStorage.getItem("ticket1"+this.user)
        this.ticketDetails.push(JSON.parse(this.ticketData))
      }
      //this.ticketDetails.push(JSON.parse(this.ticketData))
      console.log(this.ticketDetails)

    }else{
      this.accountExist=false
    }
  }

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

  clickLogin(){
    //console.log("User: "+this.loginMail + " pass: "+ this.loginPass)
    localStorage.setItem("credentials",JSON.stringify({"user":this.loginMail,"pass":this.loginPass}))
    this.loggedIn()
  }

  clickSignup(){
    this.signupData={
      "name": this.signupName,
      "password": this.signupPass,
      "phone_number":this.signupNum,
      "email":this.signupMail
    }
    if (!this.signupName||!this.signupPass||!this.signupNum||!this.signupMail||!this.confirmPass){
      this.signUpFields()
    }else{
      if(this.signupPass != this.confirmPass){
        this.passMatch()
      }
      else{
        if(!this.re.test(this.signupMail)){
          this.invalidMail()
        }
        else{
          if(!this.re1.test(this.signupPass)){
            this.invalidPass()
          }else{
            if(!this.re2.test(this.signupNum)){
              this.invalidNum()
            }else{
              this.apis.signUp(this.hn,this.signupData).subscribe(
                data => {
                  if(data == this.signupMail){
                    console.log(data)
                    this.otpRequest(data)
                  }else{
                    this.displayFailed()
                  }
                },
                err => console.log(err)
            );
            }
          }
        }
      }
    }
  }

  onLogout(){
    localStorage.removeItem("credentials")
    location.reload()
  }

  async otpRequest(mail) {
    const alert = await this.alertController.create({
      header: 'Confirm Mail',
      subHeader: 'Enter OTP',
      inputs: [{
        name:"otp",
        type:"text",
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log('Confirm Ok '+ data.otp);
            this.otp={"email":mail,"otp":data.otp}
            this.apis.confirmAccount(this.hn,this.otp).subscribe(
              data => {
              console.log(data)
              if(data=="SUCCESS"){
                //this.displaySuccess()
                this.apis.loginAccount(this.hn,this.signupMail,this.signupPass).subscribe(
                  data => {
                    if(!data){
                        this.loginFailed()
                    }   else {
                      localStorage.setItem("credentials",JSON.stringify({"user":this.signupMail,"pass":this.signupPass,"token": data}))
                      this.loggedIn()
                    }
                  },
                  err => console.log(err)
                );
              }else{
                this.displayFailed()
              }
              },
              err => console.log(err)
          );
          }
        }
      ]
    });

    await alert.present();
  }

  async loggedIn() {
    const alert = await this.alertController.create({
      header: 'Login Success',
      buttons: [{
        text:"OK",
        handler: () => {
          console.log('Confirm Login');
          location.reload()
        }
      }]
    });
    await alert.present();
  }

  async wrongOTP() {
    const alert = await this.alertController.create({
      header: 'OTP',
      message: 'Wrong',
      buttons: ['OK']
    });

    await alert.present();
  }
  async displaySuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      buttons: ['OK']
    });

    await alert.present();
  }

  async loginFailed() {
    const alert = await this.alertController.create({
      header: 'Login Failed',
      message:"Please Try From Login Tab",
      buttons: ['OK']
    });

    await alert.present();
  }

  async displayFailed() {
    const alert = await this.alertController.create({
      header: 'Failed',
      message:"Please Try Again",
      buttons: ['OK']
    });

    await alert.present();
  }
  async signUpFields() {
    const alert = await this.alertController.create({
      header: 'Please Fill All Details',
      buttons: ['OK']
    });

    await alert.present();
  }
  async passMatch() {
    const alert = await this.alertController.create({
      header: 'Passwords Don\'t Match',
      buttons: ['OK']
    });

    await alert.present();
  }
  async invalidMail() {
    const alert = await this.alertController.create({
      header: 'Invalid Email',
      buttons: ['OK']
    });

    await alert.present();
  }
  async invalidPass() {
    const alert = await this.alertController.create({
      header: 'Invalid Password',
      message: 'At least 6 characters in length\nLowercase letters\nUppercase letters\nNumbers Special characters',
      buttons: ['OK']
    });

    await alert.present();
  }
  async invalidNum() {
    const alert = await this.alertController.create({
      header: 'Invalid Phone Number',
      message:"Add +1 To Number",
      buttons: ['OK']
    });

    await alert.present();
  }
}
