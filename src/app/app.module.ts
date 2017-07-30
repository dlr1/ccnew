import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {ControlsModule} from './controls/controls.module';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NitService} from './services/nitService';
import {ControlsService} from './services/controls.service';

import { AppComponent } from './app.component';
import {NitComponent} from './nit/default.component';
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "./loader.service";
import { MyInterceptor } from './my.interceptor';


@NgModule({
  declarations: [
    AppComponent,    
    NitComponent,
    LoaderComponent     
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ControlsModule,
    RouterModule,
    ReactiveFormsModule   
  ],
  providers: [NitService, 
              ControlsService, 
              LoaderService, 
              { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
