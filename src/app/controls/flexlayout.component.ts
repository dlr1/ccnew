import { Component } from '@angular/core';


@Component({
  selector: 'flex-comp',
  templateUrl: './flexlayout.component.html',
  styles: [`  
    .green{background-color: green;height:100px}
    .yellow{background-color: yellow;height:100px}
    .red{background-color: red;height:100px}
    .default{background-color:lightgray}
  `]
})
export class FlexComponent {
  samples = [];
  selectedSample = "sample 2";

  constructor(){
    for(var i=0;i< 10;i++)
      this.samples.push(`sample ${i+1}`);
  }

  isSelected(sample) {    
    return sample == this.selectedSample;
  }
}
