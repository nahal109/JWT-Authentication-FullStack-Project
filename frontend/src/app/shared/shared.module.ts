import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from '../app.component';
import {HeaderComponent} from '../components/header/header.component';
import {ContentComponent} from '../components/content/content.component';
import {CarComponent} from '../components/car/car.component';
import {AppRoutingModule} from '../app.routes.server';
import {MenuService} from '../service/menu.service';
 // Service එක import කරන්න

let SharedModule;

@NgModule({
  bootstrap: [AppComponent],
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CarComponent
  ], // MenuService එක provide කරන්න
  providers: [MenuService]
})
export class AppModule { }
