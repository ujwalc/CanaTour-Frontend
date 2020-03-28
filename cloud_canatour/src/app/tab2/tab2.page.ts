import { Component,Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ApiserviceService} from '../tabs/apiservice.service'
import { HttpClient } from '@angular/common/http';
import { City } from '../tabs/city.model';
import { FormDataService } from '../tabs/form-data.service';
import { Form } from '../tabs/form-data.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  @Output() childEvent = new EventEmitter();

  sampledata:any
  sampleBusData:any
  apis:any
  forms:any
  http: HttpClient
  selectedSoc = ""
  selectedpCount=""
  selectedDate=""
  selectedPark=""
  source = []
  destination = ['Halifax','Toronto','Montreal']
  parks = []
  router: Router;
  formData: FormData = new FormData(); 
  hn = window.location.hostname
  
  sources: City[] =[];
  destinations: City[]=[];
  formClass: Form[]=[];

/*  constructor( _router: Router ) {
    this.router = _router;
  } */
  

  constructor(  apis:ApiserviceService,_router: Router,_formData: FormDataService ) {
    
    this.apis = apis;
    this.router = _router;
    this.forms=_formData;
    try{

      this.apis.getAllBeaches(this.hn)
    .subscribe(
      data => {
          this.sampledata=data;
          //console.log(this.sampledata["source_list"]);
          for(var index in this.sampledata["source_list"])
          {
            
            this.source.push(this.sampledata["source_list"][index].cityname)
            
              this.sources.push(
                {
                  cityId: this.sampledata["source_list"][index].cityid,
                  cityName: this.sampledata["source_list"][index].cityname
              });
              
          }
          for(var index in this.sampledata["destination_list"])
          {
            this.parks.push(this.sampledata["destination_list"][index].destname)
         
              this.destinations.push(
                {
                  cityId: this.sampledata["destination_list"][index].destid,
                  cityName: this.sampledata["destination_list"][index].destname
              });
           
          }
      }
    );
    }
    catch (e){
      console.log(e)
    }
  }

onSearch(){

  this.formClass.push({ 
    source: this.selectedSoc,
    destination: this.selectedPark,
    passengers:this.selectedpCount,
    datepicker:this.selectedDate.split("T")[0]
  });

  this.forms.putFormDetails(this.formClass);
  
  /*
  this.formData.append("source",this.selectedSoc)
  this.formData.append("destination",this.selectedPark)
  this.formData.append("passengers",this.selectedpCount)
  this.formData.append("datepicker",this.selectedDate.split("T")[0])
  this.forms.putFormDetails(this.selectedSoc,this.selectedPark,this.selectedpCount,this.selectedDate.split("T")[0]);
  this.forms.putFormData(this.formData);
  
  try {

    this.apis.getBuses(this.hn,this.formData)
    .subscribe(
      data => {
        this.sampleBusData=data;
        for(var index in this.sampleBusData["buslists"])
          {
            this.source.push(this.sampleBusData["buslists"][index].busid)
            console.log(this.sampleBusData["buslists"][index].busid)
   
          }
      });
    
  } catch (error) {
    console.log(error)
  }
  */
  this.router.navigateByUrl('/bus');

}

onClear(){
  window.location.reload();
}

}
