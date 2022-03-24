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
  oneContent?:content;
  
  hobbies?:content[];
  selectedHobby?:content;
  id?:number;
  constructor(private hobbyService:HobbyService, private messageService:MessageService){
   
  }
  ngOnInit(): void{
    this.getHobbies();
    
    
    
  }
  onSelect(content:content): void {
    this.messageService.add(`HobbyComponent: Selected hobby id=${content.id}`);
  }
  errorMessage():void{
    this.messageService.add("Some kind of error occured!");
  }
  getHobbies(): void {
    this.hobbyService.getHobbies()
        .subscribe(hobbies => this.hobbies = hobbies);
  }
  show(id:any):void{
    
    this.hobbyService.getContentObj().subscribe((hobby)=>{
      id=parseInt(id);
      this.id=id;
      if(hobby.length>=id){
        for(let i=0; i<=hobby.length;i++){
        
          if(hobby[i].id==id){
            this.oneContent=hobby[i];
            this.onSelect(hobby[i]);
          }
        }
        
         return this.oneContent;
      }
      else{
        this.errorMessage();
        return  this.oneContent={
          // id:0,
          title:"",
          description:"",
          creater:"",
          imgURL:"https://miro.medium.com/max/1200/1*6FVkh62q28nvgoNzSZVNHA.jpeg"
        };
      }
      
      });
      
  }
}
