import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherDataModel } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityname:any):Observable<weatherDataModel>{
    console.log("in service:",cityname)
    return this.http.get<weatherDataModel>(environment.weatherApiBaseUrl,{
    
      headers : new HttpHeaders().
      set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue).
      set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),

      params: new HttpParams().set('q',cityname).set('units','metric').set('mode','json')



    })
  }
}
