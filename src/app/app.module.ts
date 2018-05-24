import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { RouteRoutingModule } from './route/route-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,RouteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
