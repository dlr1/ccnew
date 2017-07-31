
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from '@angular/material';

import { StructuralComponent } from "./structural.component";
import { DefaultComponent } from "./default.component";
import { SelectComponent } from "./select.component";
import { DynamicComponent, HostDirective, DclWrapper, C2, C1, Tabs, C3 } from "./dynamic.component";
import { TFormsComponent } from "./tforms.component";
import { RFormsComponent } from "./rforms.component";
import {ChildComponent} from './child.component';
import { SanitizeComponent } from "./sanitize.component";
import { FlexComponent } from "./flexlayout.component";

import { FlexLayoutModule } from "@angular/flex-layout";

const controlRoutes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'struct', component: StructuralComponent },
  { path: 'tforms', component: TFormsComponent },
  { path: 'rforms', component: RFormsComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'sanitize', component: SanitizeComponent },
  { path: 'flex', component: FlexComponent }
];

@NgModule({
  declarations: [
    StructuralComponent,
    SelectComponent,
    DefaultComponent,
    TFormsComponent,
    RFormsComponent,
    DynamicComponent,
    ChildComponent,
    HostDirective,
    SanitizeComponent,
    FlexComponent,
    DclWrapper, C1, C2, C3 , Tabs
  ],
  entryComponents:[ChildComponent, C1, C2, C3],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      controlRoutes,
      { enableTracing: false }), // <-- debugging purposes only
    CommonModule
  ],
  exports: [DefaultComponent],
  providers: []
})
export class ControlsModule { }
