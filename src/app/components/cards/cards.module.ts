import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { ListComponent } from './list/list.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ContentComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CardsModule { }
