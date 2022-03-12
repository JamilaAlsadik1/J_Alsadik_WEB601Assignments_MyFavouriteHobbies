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
    
    
    // this.hobbyService.getContentObj().subscribe((hobby)=>{
    // for(let i=0; i<=hobby.length;i++){
    //   if(hobby[i].id==2){
    //     this.oneContent=hobby[i];
    //     this.onSelect(hobby[i]);
    //   }
    // }
    
    //  return this.oneContent;
    // });
   
    
  }
  onSelect(content:content): void {
    this.messageService.add(`HobbyComponent: Selected hobby id=${content.id}`);
  }
  getHobbies(): void {
    this.hobbyService.getHobbies()
        .subscribe(hobbies => this.hobbies = hobbies);
  }
  show(id:any):void{
    
    this.hobbyService.getContentObj().subscribe((hobby)=>{
      id=parseInt(id);
      this.id=id;
      for(let i=0; i<=hobby.length;i++){
        if(hobby[i].id==id){
          this.oneContent=hobby[i];
          this.onSelect(hobby[i]);
        }
      }
      
       return this.oneContent;
      });
      
  }
}
