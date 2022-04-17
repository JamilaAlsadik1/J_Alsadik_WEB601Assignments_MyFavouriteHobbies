import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate,private _snackBar: MatSnackBar) { }
  public init() {
    
    this.updates.activateUpdate().then(() =>
document.location.reload())
    this.updates.versionUpdates.subscribe(event => {
      console.log("check for changes");
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
    ${event.version.hash}`);
          break;
        case 'VERSION_READY':
         let snackRef= this._snackBar.open("app is ready and have update","update" );
         snackRef.onAction().subscribe(() => {
          this.updates.activateUpdate().then(() =>
            document.location.reload());
        });
         
          break;
      }
    });
  }
  
}

