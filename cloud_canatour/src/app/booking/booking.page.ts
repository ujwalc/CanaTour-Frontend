import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../tabs/form-data.service';
import {ApiserviceService} from '../tabs/apiservice.service'
import { Form } from '../tabs/form-data.model';
import {Router} from '@angular/router';

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
  formData: FormData = new FormData(); 
  router: Router;
  scheduleid=""

  constructor(apis:ApiserviceService,_formData: FormDataService, _router: Router) {
    this.apis = apis;
    this.forms=_formData;
    this.router = _router;
  
   }

  ngOnInit() {
  }

  onPay() {
    this.scheduleid=this.forms.getScheduleID();
    console.log("hi")
    console.log(this.scheduleid)
  }

}
