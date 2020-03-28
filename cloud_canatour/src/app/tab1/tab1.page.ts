import { Component,Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {ApiserviceService} from '../tabs/apiservice.service'
import { HttpClient } from '@angular/common/http';
import { City } from '../tabs/city.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

@Injectable({
  providedIn: 'root'
})
export class Tab1Page {

  @Output() childEvent = new EventEmitter();

  sampledata:any
  sampleBusData:any
  apis:any
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
  
  sources: City[] =[];
  destinations: City[]=[];
  hn = window.location.hostname

/*  constructor( _router: Router ) {
    this.router = _router;
  } */
  

  constructor(  apis:ApiserviceService,_router: Router ) {
    this.apis = apis;
    this.router = _router;
    try{

      this.apis.getAllParks(this.hn)
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
  this.formData.append("Source",this.selectedSoc)
  this.formData.append("Park",this.selectedPark)
  this.formData.append("Count",this.selectedpCount)
  this.formData.append("Date",this.selectedDate.split("T")[0])
  try {

    this.apis.getBuses(this.hn,this.formData)
    .subscribe(
      data => {
        this.sampleBusData=data;
        for(var index in this.sampleBusData["buslists"])
          {
            this.source.push(this.sampleBusData["buslists"][index].busid)
   
          }
      });
    
  } catch (error) {
    console.log(error)
  }
  this.router.navigateByUrl('/bus');

}
  
}
