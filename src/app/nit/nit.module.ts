import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NitService} from '../services/nitService';

import {NitComponent} from './default.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RingLib } from "../services/ringLib";

@NgModule({
  declarations: [        
    NitComponent    
  ],
  imports: [
   CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule   
  ],
  exports:[NitComponent],
  providers:[RingLib]  
})
export class NitModule { }
