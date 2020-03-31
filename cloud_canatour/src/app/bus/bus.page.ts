import { Component, OnInit } from '@angular/core';
import { Buss } from './bus.model';
import { FormDataService } from '../tabs/form-data.service';
import {ApiserviceService} from '../tabs/apiservice.service'
import { Form } from '../tabs/form-data.model';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.page.html',
  styleUrls: ['./bus.page.scss'],
})
export class BusPage implements OnInit {

  forms:any
  apis:any
  source = []
  hn = window.location.hostname
  sampleBusData:any
  testData:any
  formData: FormData = new FormData(); 
  router: Router;
  scheduleid=""



busses: Buss[] = []

  constructor(apis:ApiserviceService,_formData: FormDataService, _router: Router,public alertController: AlertController) {
    this.apis = apis;
    this.forms=_formData;
    this.router = _router
    this.formData=this.forms.getFormData();
    this.testData=this.forms.getFormDetails();

    console.log(this.testData[0].source)

    this.formData.append("source",this.testData[0].source)
    this.formData.append("destination",this.testData[0].destination)
    this.formData.append("passengers",this.testData[0].passengers)
    this.formData.append("datepicker",this.testData[0].datepicker)

    try {

      this.apis.getBuses(this.hn,this.formData)
      .subscribe(
        data => {
          this.sampleBusData=data;
          for(var index in this.sampleBusData["buslists"])
            {
              this.scheduleid = this.sampleBusData["buslists"][index].scheduleid
              this.busses.push({
                source_city_name: this.sampleBusData["buslists"][index].source_city_name,
                destination_name: this.sampleBusData["buslists"][index].destination_name,
                journeydate: this.sampleBusData["buslists"][index].journeydate,
                starttime: this.sampleBusData["buslists"][index].starttime,
                seatsavailable: this.sampleBusData["buslists"][index].seatsavailable,
                busid: this.sampleBusData["buslists"][index].busid,
                scheduleid: this.sampleBusData["buslists"][index].scheduleid,
                price: this.sampleBusData["buslists"][index].price,
              });
              //console.log(this.sampleBusData["buslists"][index].busid)
     
            }
        });
      
    } catch (error) {
      console.log(error)
    }

   }

  ngOnInit() {
  }

  onBook(sData){

    if(localStorage.getItem("credentials")){
      this.forms.putScheduleID(sData)
      this.router.navigateByUrl('/booking');
    }else{
      this.loginAlert()
    }
  }

  async loginAlert() {
    const alert = await this.alertController.create({
      header: 'Please Login',
      buttons: ['OK']
    });

    await alert.present();
  }


}
