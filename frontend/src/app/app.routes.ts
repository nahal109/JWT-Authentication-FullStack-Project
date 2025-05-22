import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContentComponent } from './components/content/content.component';


export const routes: Routes = [ // export කරන්න
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'cars', component: CarComponent }
      // අනිත් routes මෙතනට එකතු කරන්න
    ]
  },
  { path: '**', redirectTo: 'cars', pathMatch: 'full' }
];
