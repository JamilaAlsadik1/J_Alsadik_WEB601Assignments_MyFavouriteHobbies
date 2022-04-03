import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { content } from '../helper-files/content-interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
   @Output() newHobbyEvent:EventEmitter<content>=new EventEmitter<content>();
  // newContent?:content;
  // @ViewChild('title') inputTitle: any;
  // @ViewChild('description') inputDescription: any;
  // @ViewChild('creater') inputCreater: any;
  // @ViewChild('button') inputButton: any;
  updateContent?:content;
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
 
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed');
        this.newHobbyEvent.emit(result);
      }
     
    });}
  ngOnInit(): void {
    
  }
  // addContent(title:string,description:string,creater:string){
  //   if(title.length>0 && description.length>0 && creater.length>0){
  //     this.newContent={
  //       title:title,
  //       description:description,
  //       creater:creater
  //     }
  //     this.newHobbyEvent.emit(this.newContent);
  //     this.inputTitle.nativeElement.value="";
  //     this.inputDescription.nativeElement.value="";
  //     this.inputCreater.nativeElement.value="";
  //   }
  
  // }

}
