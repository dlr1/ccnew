import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ReconService {
    baseUrl:string = "http://cmdctrl-test";
    sendCommandUrl = 'https://plancactst01.pla.dc.xo.com:8000/dcm/command';
    constructor(private http: HttpClient){
        
    }

    sendCommand(data):Promise<Object>{         
        var jsonStringfiedVersion = {
                        json: encodeURIComponent(JSON.stringify(data)),
                        backendUrl: this.sendCommandUrl,
                        opMethod: "POST"
                    };
                     var backendUrl = "/api/dcmService";
        return this.http.post(`${this.baseUrl}/api/dcmService`, jsonStringfiedVersion).toPromise();

       
    }
}