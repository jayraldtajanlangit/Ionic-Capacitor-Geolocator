import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  location: any;

  constructor() {}

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:' + coordinates);
      console.log(coordinates);
      const { latitude, longitude } = coordinates.coords;
      alert('Your current position is: ' + latitude + ',' + longitude);
    } catch (error) {
      alert('Error getting position' + error);
    }
  }

  async watchLocation() {
    const watchID = Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.log('Error Watching Position', err);
        return;
      }
      console.log('Watched Position: ', position);
      this.location = position?.coords;
    });
  }
}