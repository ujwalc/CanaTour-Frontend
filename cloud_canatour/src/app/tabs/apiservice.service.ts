import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http,HttpModule,RequestOptions,Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpclient: HttpClient, private nativeHTTP: HTTP) { }

  getAllParks(hn): Observable<any> {
    //const subURL = "http://"+hn+":3000/search/"+searchKey
    //console.log(subURL);
    const subURL="http://"+hn+":5000/getallcities?type=PARK&device=mobile";
    return this.httpclient.get(subURL);
}
getAllBeaches(hn): Observable<any> {
  //const subURL = "http://"+hn+":3000/search/"+searchKey
  //console.log(subURL);
  const subURL="http://"+hn+":5000/getallcities?type=BEACH&device=mobile";
  return this.httpclient.get(subURL);
}
getAllCities(): Observable<any> {
  //const subURL = "http://"+hn+":3000/search/"+searchKey
  //console.log(subURL);
  const subURL="http://127.0.0.1:5000/getallcities?type=CITY&device=mobile";
  return this.httpclient.get(subURL);
}

getBuses(hn,formData): Observable<any> {
  //const subURL = "http://"+hn+":3000/search/"+searchKey

  const subURL="http://"+hn+":5001/bus/search?device=mobile";
  
  return this.httpclient.post(subURL,formData)

}

bookTicket(hn,formData): Observable<any> {
  //const subURL = "http://"+hn+":3000/search/"+searchKey

  const subURL="http://"+hn+":5002/book/ticket";
  return this.httpclient.post(subURL,formData)

}
 
signUp(hn,data):Observable<any>{
  //http://127.0.0.1:3000/signup

  const subURL="http://"+hn+":3000/signup";
  return this.httpclient.post(subURL,data)
}

confirmAccount(hn,data): Observable<any> {
  
  const subURL="http://"+hn+":3000/confirmsignup";
  return this.httpclient.post(subURL,data)

}

loginAccount(hn,email,password): Observable<any> {
  const subURL="http://"+hn+":3000/login/"+email+"/"+password;
  return this.httpclient.get(subURL)

}

}
