import { Component } from '@angular/core';

export class Hero {
    superPowers: Array<string>;
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
}

@Component({
    selector: 'tforms-comp',
    templateUrl: './tforms.component.html',
    styles: [`
     
      .ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}  
      `
    ]
})
export class TFormsComponent {

    selection = [];
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    superPowers = this.powers.map((x,i) => ({ name: x, selected: i%2 == 0 ? true : false }));
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }

    active = true;


    toggleSelection(power) {
        power.selected = !power.selected;
        this.model.superPowers = this.superPowers.filter(x => x.selected).map(x => x.name);
    };

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
