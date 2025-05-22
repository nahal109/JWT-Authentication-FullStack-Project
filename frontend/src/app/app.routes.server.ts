import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ContentComponent } from './components/content/content.component';
import {ServerRoute} from '@angular/ssr';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: 'cars', component: CarComponent }
      // Add other routes here for fuel-type, reservation, reports
    ]
  },
  { path: '**', redirectTo: 'cars', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const serverRoutes: ServerRoute[] = [ // ServerRoute[] විදිහට type කරන්න
  { path: 'cars', component: CarComponent, "renderMode": 'Server' }, // renderMode එකතු කරන්න
  { path: '', component: ContentComponent, 'renderMode': 'Server' } // renderMode එකතු කරන්න
];
