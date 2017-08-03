import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NitService {
    baseUrl:string = "http://cmdctrl-test";
    disconnectUrl = "https://plancactst01.pla.dc.xo.com:8000/dcm/disconnect";
    connectUrl = "https://plancactst01.pla.dc.xo.com:8000/dcm/connect";
    constructor(private http: HttpClient){
        
    }
       
    disconnect(data): Promise<object>{       
        var jsonStringfiedVersion = {
                        json: encodeURIComponent(JSON.stringify(data)),
                        backendUrl: this.disconnectUrl,
                        opMethod: "POST"
                    };
                     var backendUrl = "/api/dcmService";
        return this.http.post(`${this.baseUrl}/api/dcmService`, jsonStringfiedVersion).toPromise();
    }

    getConnection(request): Promise<object>{
        request.osusername = 'ldarbha';      
        request.connectUrl = this.connectUrl;  
        return this.http.post(`${this.baseUrl}/api/connectRequest`, request).toPromise();
    }

    getRings(): Observable<Object>{        
        return this.http.get('http://cmdctrl-test/api/rings');
    }    

    getRing(ringName: string){
        return this.http.get(`${this.baseUrl}/api/rings?Name=${ringName}&DeviceNameUrl=https://plancactst01.pla.dc.xo.com:8000/dcm/admin/devices/tbs`);       
    }
    getUniqueNodes(nodes) {
            var found = '';
            let devices = [];

            for (var i = 0; i < nodes.length; ++i) {
                var node = nodes[i];

                if (found.indexOf(node.nodeA) == -1) {
                    found += node.nodeA;
                    if (!node.excludeNodeA)
                        devices.push({
                            name: node.nodeA,
                            type: node.nodeAType,
                            address: node.nodeAAddress
                        });
                }

                if (found.indexOf(node.nodeB) == -1) {
                    found += node.nodeB;
                    if (!node.excludeNodeB)
                        devices.push({
                            name: node.nodeB,
                            type: node.nodeBType,
                            address: node.nodeBAddress
                        });
                }
            }

            for (var i = 0; i < devices.length; ++i) {
                var device = devices[i];
                device.circuits = [];
                found = '';

                for (var j = 0; j < nodes.length; ++j) {
                    var node = nodes[j];
                    var circuits = node.circuitId.split('--');

                    if (node.nodeA == device.name || node.nodeB == device.name) {

                        for (var k = 0; k < circuits.length; ++k) {
                            if (found.indexOf(circuits[k]) == -1) {
                                device.circuits.push(circuits[k]);
                                found += circuits[k];
                            }
                        }
                    }
                }
            }

            return devices;
        }
        
    ngOnInit(){

    }
}