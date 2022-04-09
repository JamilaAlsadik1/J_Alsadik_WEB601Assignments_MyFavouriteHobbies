import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {content} from '../helper-files/content-interface';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';
import { HobbyService } from '../services/hobby.service';
import { MessageService } from '../services/message.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
contentArray:content[];
outPut:string;
oneContent?:content;
  
  hobbies?:content[];
  selectedHobby?:content;
  id?:number;
  constructor(private hobbyService:HobbyService,public dialog: MatDialog, private messageService:MessageService) {
   this.contentArray=[];
    this.outPut="";
    
   }

  ngOnInit(): void {
    this.getHobbies();
   this.hobbyService.getContentObj().subscribe(array=>this.contentArray=array);
  

  }
  findTitle(findTitle:string):void{
     for(let i=0;this.contentArray.length>=i;i++){
       let title=document.querySelector<HTMLElement>(`.${this.contentArray[i].title}`);
        title?.classList.remove('selected');
       if(this.contentArray[i].title.toLowerCase()==findTitle.toLowerCase()){
          this.outPut="this title is available in the content card";
          title?.classList.remove('selected');
          title?.classList.add('selected');
          break;
        }
      else{
         this.outPut= "this title is not available in the content card";
          }
      title?.classList.remove('selected');
    
  }
  }
  
  addHobbyToList(newHobby:content):void{
   this.hobbyService.addContent(newHobby).subscribe(newfromServer=>{
     this.contentArray.push(newfromServer);
     this.contentArray=[...this.contentArray];
     console.log(newfromServer.id);
   });
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
