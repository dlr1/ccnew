import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ControlsService {
    
    constructor(private http: HttpClient){
        
    }

}