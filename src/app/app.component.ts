import { Component } from '@angular/core';
import { LoaderService } from "./loader.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpclient: HttpClient){
    
  }

  showLoader(){
    this.httpclient.get("https://alligator.io/angular/httpclient-interceptors/")
    .subscribe(
        data => console.log(data),
        err => console.log(err)
      );    
  }
}
