import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-samples',
  templateUrl: './formsamples.component.html',
   styles: [`
        .error-msg {
            color: #a94442;
        }
        .fix-error-icon {
            top: 27px;
        }
        .control-label.required:after { 
            color: #d00;
            content: "*";
            position: absolute;
            margin-left: 5px;
            top:7px;
        }


    `]
})
export class FormSamplesComponent  {

  
  selectedValue: string = "2";
  constructor() { }

  selectionChanged(event){
      this.selectedValue = event.target.value;
  }
}
