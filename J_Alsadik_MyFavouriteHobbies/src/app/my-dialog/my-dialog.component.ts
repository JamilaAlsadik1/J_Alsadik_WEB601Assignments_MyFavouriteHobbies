import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { content } from '../helper-files/content-interface';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  newContent?:content;
  @ViewChild('title') inputTitle: any;
  @ViewChild('description') inputDescription: any;
  @ViewChild('creater') inputCreater: any;
  @ViewChild('button') inputButton: any;
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }
  addContent(title:string,description:string,creater:string){
    if(title.length>0 && description.length>0 && creater.length>0){
      this.newContent={
        title:title,
        description:description,
        creater:creater
      }
      this.dialogRef.close(this.newContent);
      
      this.inputTitle.nativeElement.value="";
      this.inputDescription.nativeElement.value="";
      this.inputCreater.nativeElement.value="";
      
    }
    
  }
  close():void{
    this.dialogRef.close();
  }
 
}
