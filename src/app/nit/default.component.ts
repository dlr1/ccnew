import { Component } from '@angular/core';
import { NitService } from "../services/nitService";
import { CSSDeviceService } from "../services/cssdevice.service";

@Component({
  selector: 'nit-default',
  templateUrl: './default.component.html'
})
export class NitComponent {
  rings: any;
  ring:any;
  ringName: string;
  selectedRing;
  devices: any;
  nodePdfUrl = null;
  constructor(private nitService: NitService, private cssDeviceService: CSSDeviceService) {
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

  async connectToDevice(device) {
    console.log(device);
    if (device.sessionKey) {
      var data = await this.nitService.disconnect({ session_key: device.sessionKey || '' });
      console.log("data returned:" + JSON.stringify(data));
    }
    data = await this.nitService.getConnection({ DeviceName: device.name, DeviceType: device.type, context: 'ring stuff' })
    return data;
  }

  getDeviceMetaData(device) {
    this.connectToDevice(device).then(data => {
      console.log("after connection:" + JSON.stringify(data));
      device.sessionKey = data["session_key"];
      device.icon = 'fa fa-check text-success';
      device.metadata = {};
      // if ($scope.selectedRing) {
      //   clearErrorsForDevice(device);
      // }

      if (device.type == 'ELN' || device.type == 'ELN-T') {
        // elnDeviceService.getMetadata($scope.ring, device, $scope.selectedRing).then(function () {
        //   updateIsVPLSDataAvailable();
        //   updateRingPaths();
        //   $scope.updateOverallRingStatus();
        //   device.isRunning = false;
        // });
      }
      else if (device.type.indexOf('ELN') > -1) {
        alert('Device ' + device.name + ' type is \'' + device.type + '\'. It should be ELN. Make sure it is correctly entered in TBS');
        device.isRunning = false;
      }
      else {
        this.cssDeviceService.getMetadata(this.ring, device, this.selectedRing).then(function () {
          device.view = 'ringview';
          device.isRunning = false;
        });

      }
    })
  }

getRing(ring) {
  this.ring = ring;
  this.nitService.getRing(ring.value).subscribe(data => {
    this.devices = this.nitService.getUniqueNodes(data[0].spans);
  });
}
async ngOnInit() { 
  console.log('sdafsdgsdgs');
  this.nitService.getRings().subscribe(data => {
    this.rings = data;
  })
}
}
