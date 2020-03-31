import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { Form } from '../tabs/form-data.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  formData: FormData = new FormData(); 
  router: Router;
  hn:any;
  scheduleID = ""

  testData:any

  constructor(_router: Router) {
    
   }

  getFormData(){
    return this.formData;
   // return this.hn
  }

  putFormData(formData) {
    this.formData = formData
    //this.hn = hn
    
  }

  putFormDetails(forms: Form){
    this.testData=forms
    
  }
  getFormDetails(){
    return this.testData;
  }

  putScheduleID(schedID){
    this.scheduleID=schedID
    
  }
  getScheduleID(){
    //console.log(this.scheduleID)
    return this.scheduleID;
  }
}
