
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StructuralComponent } from "./structural.component";
import { DefaultComponent } from "./default.component";
import { SelectComponent } from "./select.component";
import { DynamicComponent, HostDirective } from "./dynamic.component";
import { TFormsComponent } from "./tforms.component";
import { RFormsComponent } from "./rforms.component";
import {ChildComponent} from './child.component';

const controlRoutes: Routes = [
  { path: 'select', component: SelectComponent },
  { path: 'struct', component: StructuralComponent },
  { path: 'tforms', component: TFormsComponent },
  { path: 'rforms', component: RFormsComponent },
  { path: 'dynamic', component: DynamicComponent }

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
    HostDirective
  ],
  entryComponents:[ChildComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      controlRoutes,
      { enableTracing: false }), // <-- debugging purposes only
    CommonModule
  ],
  exports: [DefaultComponent],
  providers: []
})
export class ControlsModule { }
