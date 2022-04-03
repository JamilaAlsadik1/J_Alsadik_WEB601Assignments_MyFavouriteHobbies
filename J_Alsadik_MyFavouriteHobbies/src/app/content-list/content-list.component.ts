import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {content} from '../helper-files/content-interface';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';
import { HobbyService } from '../services/hobby.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
contentArray:content[];
outPut:string;

  constructor(private hobbyService:HobbyService,public dialog: MatDialog) {
   this.contentArray=[];
    this.outPut="";
    
   }

  ngOnInit(): void {
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
}
