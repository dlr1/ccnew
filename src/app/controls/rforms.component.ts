import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

class Hero {
  superPowers: Array<string>;
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }
}

@Component({
  selector: 'rforms-comp',
  templateUrl: './rforms.component.html'
})
export class RFormsComponent {

  heroForm: FormGroup;
  selection = [];
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  superPowers = this.powers.map((x, i) => ({ name: x, selected: i % 2 == 0 ? true : false }));
  formValue: any;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  submitted = false;
  onSubmit() { this.submitted = true; }

  active = true;


  toggleSelection(power) {
    power.selected = !power.selected;
    this.updateFormValue();
  };

  updateFormValue() {
    this.formValue = Object.assign({}, this.heroForm.value, { superPowers: this.superPowers.filter(x => x.selected).map(x => x.name) });
  }
  newHero() {
    this.createForm();
    this.active = false;
  }

  createForm(): any {
    this.heroForm = this.fb.group({
      id: '1',
      name: ['', Validators.required],
      power: '',
      alterEgo: ''
    })
    this.heroForm.valueChanges.subscribe(x => this.updateFormValue());
  }

}
