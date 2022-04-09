import { Component } from '@angular/core';
import { content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { HobbyService } from './services/hobby.service';
import {  subscribeOn } from 'rxjs';
import { concatMap,filter,map } from 'rxjs/operators';

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
  constructor(){
   
  }
  ngOnInit(): void{
    
    
    
    
  }

}
