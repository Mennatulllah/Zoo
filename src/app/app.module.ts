/// <reference path="../../typings/index.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { ZooRoutModule } from 'appRoutingModule.module';
import { DidUknowComponent } from './did-uknow/did-uknow.component';

import { FaqService } from './faq.service';
import { ZoosService } from './zoos.service';
import { NewsService } from './news.service';
import { AnimalsService } from './animals.service';
import {TicketsService} from './tickets.service'

import { ZoosComponent } from './zoos/zoos.component';
import { PreservesComponent } from './preserves/preserves.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NewsComponent } from './news/news.component';
import { AnimalsComponent } from './animals/animals.component';
import { StaffComponent } from './staff/staff.component';
import { TipsComponent } from './tipsforyouvisit/tips.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component'




@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    FaqComponent,
    DidUknowComponent,
    ZoosComponent,
    PreservesComponent,
    TicketsComponent,
    NewsComponent,
    AnimalsComponent,
    StaffComponent,
    TipsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    ZooRoutModule
  ],
  providers: [ NewsService, FaqService , ZoosService, AnimalsService,TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }