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
import {NitModule} from './nit/nit.module';
import { LoaderComponent } from "./loader.component";
import { LoaderService } from "./loader.service";
import { MyInterceptor } from './my.interceptor';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CSSDeviceService } from "./services/cssdevice.service";
import { ReconService } from "./services/recon.service";
import { FormSample1Component } from "./formsample1.component";
import { FormSample2Component } from "./formsample2.component";

import { FormSamplesComponent } from "./formsamples.component";
import { FieldErrorDisplayComponent } from "./field-error-display.component";

@NgModule({
  declarations: [
    AppComponent,        
    LoaderComponent,
    FormSamplesComponent,
    FormSample1Component,
    FormSample2Component,
    FieldErrorDisplayComponent     
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ControlsModule,
    RouterModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NitModule   
  ],
  providers: [NitService, 
              ControlsService, 
              LoaderService, 
              CSSDeviceService,
              ReconService,
              { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
