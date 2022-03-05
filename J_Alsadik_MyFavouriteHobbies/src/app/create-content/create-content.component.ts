import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
@Output() newHobbyEvent:EventEmitter<content>=new EventEmitter<content>();
newContent?:content;
  constructor() { }

  ngOnInit(): void {
  }
 addcontent(id:any,title:any,description:any,creater:any,imgUrl:any,type:any,tags:any){
   this.newContent={
     id:parseInt(id),
     title:title,
     description:description,
     creater:creater,
     imgURL:imgUrl,
     type:type,
     tags:tags.split(","),
   }
   this.newHobbyEvent.emit(this.newContent);
 }
}
