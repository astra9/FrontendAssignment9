import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MenuDataModel } from '../RESTdata/menuservice.module';
import { Home } from './home.component';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    MenuDataModel
  ],
  declarations: [
    Home
  ],
  exports:[Home],
})
export class HomeModule { }