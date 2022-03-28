import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newHobbyEvent:EventEmitter<content>=new EventEmitter<content>();
  newContent?:content;
  @ViewChild('title') inputTitle: any;
  @ViewChild('description') inputDescription: any;
  @ViewChild('creater') inputCreater: any;
  @ViewChild('button') inputButton: any;
  updateContent?:content;
  constructor() { }

  ngOnInit(): void {
    
  }
  addContent(title:string,description:string,creater:string){
    if(title.length>0 && description.length>0 && creater.length>0){
      this.newContent={
        title:title,
        description:description,
        creater:creater
      }
      this.newHobbyEvent.emit(this.newContent);
      this.inputTitle.nativeElement.value="";
      this.inputDescription.nativeElement.value="";
      this.inputCreater.nativeElement.value="";
    }
  
  }

}
