import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormDataService } from '../tabs/form-data.service';
import {ApiserviceService} from '../tabs/apiservice.service'
import { Form } from '../tabs/form-data.model';
import {Router} from '@angular/router';
import {Ticket} from './ticket.model';
import {Card} from './card.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  forms:any
  apis:any
  source = []
  hn = window.location.hostname
  sampleBusData:any
  testData:any
  cardData: FormData = new FormData(); 
  router: Router;
  scheduleid=""
  ticket:Ticket[];
  cardName:string;
  cardNum:string
  cardCVV:string
  cardMM:string
  cardYY:string
  bookedData:any
  passengers="1"
  user:string;
credentials:any

  constructor(apis:ApiserviceService,_formData: FormDataService, _router: Router,public alertController: AlertController) {
    this.apis = apis;
    this.forms=_formData;
    this.router = _router;
    this.credentials=localStorage.getItem("credentials")
  this.user=JSON.parse(this.credentials).user
   }

  ngOnInit() {
  }

  onPay() {
if(!this.cardName||!this.cardNum||!this.cardMM||!this.cardYY||!this.cardCVV){
  this.detailsAlert()
}else{
    this.scheduleid=this.forms.getScheduleID();

    this.cardData.append("cardNumber",this.cardNum)
    this.cardData.append("expiryMonth",this.cardMM)
    this.cardData.append("expiryYear",this.cardYY)
    this.cardData.append("cvCode",this.cardCVV)
    this.cardData.append("passengers",this.passengers)
    this.cardData.append("scheduleid",this.scheduleid)
    this.cardData.append("user",this.user)

    this.apis.bookTicket(this.hn,this.cardData).subscribe(data => {
      console.log(data)
      this.bookedData = data
      if(localStorage.getItem("ticket1"+this.user)){
        if(localStorage.getItem("ticket2"+this.user)){
          localStorage.setItem("ticket3"+this.user,JSON.stringify(data))
          this.paymentAlert()
        }else{
          localStorage.setItem("ticket2"+this.user,JSON.stringify(data))
          this.paymentAlert()
        }
      }else{
        localStorage.setItem("ticket1"+this.user,JSON.stringify(data))
        this.paymentAlert()
      }
    },
    err => {
      console.log(err)
      this.paymentFailed()
    }
    )
  }
  }

  async paymentAlert() {
    const alert = await this.alertController.create({
      header: 'Payment Done',
      subHeader:"Booked Ticket",
      message:"Check ticket details in account",
      buttons: [ {
        text: 'OK',
        role: 'ok',
        cssClass: 'secondary',
        handler: () => {
          this.router.navigateByUrl('/tabs');
        }
      }]

    });

    await alert.present();
  }
  async paymentFailed() {
    const alert = await this.alertController.create({
      header: 'Payment Failed',
      message:"Try Again",
      buttons: ['OK']
    });

    await alert.present();
  }

  async detailsAlert() {
    const alert = await this.alertController.create({
      header: 'Enter All Details',
      
      buttons: ['OK']
    });

    await alert.present();
  }
}
