import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherDataModel } from './Models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'WeatherApp';
  value="test value";
  cityName:string='Auckland';
  
  public weatherData:any



constructor(private weatherService:WeatherService){}

ngOnInit(): void {
  
 this.weatherService.getWeatherData(this.cityName).subscribe({next : data=>console.log("city weather data:",data)});

}


onSubmitCityName(value:any){

console.log("serch field value:",JSON.stringify(value));
this.weatherService.getWeatherData((value.city)).subscribe(
(data)=>{this.weatherData=data
  console.log("Weather Data:",this.weatherData);}
)
return this.weatherData;
}





}


