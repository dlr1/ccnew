import { Component } from '@angular/core';


export class CHero{
  id:number;
  name:string;
  /**
   *
   */
  constructor(id, name) {
   this.id = id;
   this.name = name;
    
  }
}


@Component({
  selector: 'select-comp',
  templateUrl: './select.component.html'
})
export class SelectComponent {
   cheroes:Array<CHero>;
   selectedHero:CHero;
   heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
   constructor(){
     this.cheroes = new Array<CHero>();
     for(var i=0;i<10;i++)
      this.cheroes.push(new CHero(i, `hero ${i}`));
   }

   heroChanged(){
     console.log(JSON.stringify(this.selectedHero));
   }
}
