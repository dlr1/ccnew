import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {ControlsModule} from './controls/controls.module';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NitService} from './services/nitService';
import {ControlsService} from './services/controls.service';

import { AppComponent } from './app.component';
import {NitComponent} from './nit/default.component';

@NgModule({
  declarations: [
    AppComponent,    
    NitComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ControlsModule,
    RouterModule  
  ],
  providers: [NitService, ControlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
