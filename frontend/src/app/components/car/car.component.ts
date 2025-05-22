import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  // Car data goes here (you can fetch this from a service later)
  carDetails = {
    name: 'Lightning McQueen',
    model: 'Dodge Viper SRT10',
    color: 'Red',
    gender: 'Male',
    imageUrl: 'URL_TO_YOUR_CAR_IMAGE' // Replace with your image URL
  };
}
