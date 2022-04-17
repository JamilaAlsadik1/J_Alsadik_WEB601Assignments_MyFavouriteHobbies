import { ApplicationRef, Component } from '@angular/core';
import { content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { HobbyService } from './services/hobby.service';
import {  concat, interval, subscribeOn } from 'rxjs';
import { concatMap,filter,first,map } from 'rxjs/operators';
import { LogUpdateService } from './services/log-update.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'J_Alsadik_MyFavouriteHobbies';
  // oneContent?:content;
  
  // hobbies?:content[];
  // selectedHobby?:content;
  // id?:number;
  constructor(private logService: LogUpdateService,private appRef: ApplicationRef,private updates: SwUpdate
    ){
   
  }
  ngOnInit(): void{
    this.logService.init();
    const appIsStable$ = this.appRef.isStable.pipe(
      first((isStable: boolean) => isStable === true));
      const everyHalfHour$ = interval(0.5 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHalfHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());
    
    
  }

}
