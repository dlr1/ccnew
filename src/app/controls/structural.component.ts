import { Component } from '@angular/core';

@Component({
  selector: 'struct-root',
  templateUrl: './structural.component.html'
})
export class StructuralComponent {
   
   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

   doSomething(value: string){
     console.log(value);
   }
}
