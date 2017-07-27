import { Component } from '@angular/core';
import { NitService } from "../services/nitService";

@Component({
  selector: 'nit-default',
  templateUrl: './default.component.html'  
})
export class NitComponent {
  rings:any;
  ring: string;
  selectedRing;
  devices:any;
  nodePdfUrl = null;
  constructor(private nitService:NitService){
    this.selectedRing = {
                health: {
                    state: 'No Data',
                    errors: [],
                    warnings: [],
                    infos: []
                },
                services: {
                    state: 'No Data',
                    errors: [],
                    warnings: [],
                    infos: [],
                    view: null
                },
                state: {
                    view: null
                }
            }
  }

  ringSelected(){
    this.nitService.getRing(this.ring).subscribe(data=>{
      
        this.devices = this.nitService.getUniqueNodes(data[0].spans);

    });
  }
  ngOnInit(){
    this.nitService.getRings().subscribe(data=>{
      this.rings = data;
    })
  }
}
