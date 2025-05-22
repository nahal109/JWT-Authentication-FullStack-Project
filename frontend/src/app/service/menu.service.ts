import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuItems() {
    return [
      { label: 'Cars', path: 'cars' },
      { label: 'Fuel-Type', path: 'fuel-type' },
      { label: 'Reservation', path: 'reservation' },
      { label: 'Reports', path: 'reports' }
    ];
  }
}
