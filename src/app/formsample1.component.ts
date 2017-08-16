import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-sample-1',
  templateUrl: './formsample1.component.html',
  styles: []
})
export class FormSample1Component implements OnInit {

  form: FormGroup;
  selectedValue = 1;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  selectionChanged(event){
      this.selectedValue = event.target.value;
  }
}
