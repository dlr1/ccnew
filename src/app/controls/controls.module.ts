
import { NgModule } from '@angular/core';
import { StructuralComponent } from "./structural.component";

import { DefaultComponent } from "./default.component";
import { SelectComponent } from "./select.component";
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';  
import {FormsModule} from '@angular/forms';

const controlRoutes: Routes = [
  { path: 'select', component: SelectComponent } ,
  { path: 'struct', component: StructuralComponent }
];

@NgModule({
  declarations: [
  StructuralComponent,
  SelectComponent,
  DefaultComponent
  ],
  imports: [
    FormsModule,
   RouterModule.forRoot(
      controlRoutes,
      { enableTracing: false }), // <-- debugging purposes only
   CommonModule
  ],
  exports:[DefaultComponent],
  providers: []
})
export class ControlsModule { }
